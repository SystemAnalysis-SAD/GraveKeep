from flask import Blueprint, request, jsonify, Response, make_response
from Models.database import get_connection
from Utils.hash_passwords import hash_password, check_password_hash
from Config.config import Config
import datetime
import json
import urllib.parse
from flask_jwt_extended import (
    create_access_token, create_refresh_token, 
    set_access_cookies, set_refresh_cookies, 
    unset_access_cookies, unset_refresh_cookies,
    jwt_required, get_jwt_identity, get_jwt
)



auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route("/login", methods=["POST"])
def Admin_login():
    try:
        data = request.get_json()
        admin_username = data.get("admin_username")
        admin_password = data.get("admin_password")
        
        if not admin_username:
            return jsonify({"message": "Username is required"}), 400
        if not admin_password:
            return jsonify({"message": "Password is required"}), 400
            
        admin_username = admin_username.strip()
        admin_password = data.get("admin_password", "")
        
        if not admin_username or not admin_password:
            return jsonify({"message": "Username and password required"}), 400

    except Exception as e:
        return jsonify({"message": "Invalid request data"}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM admin_accounts WHERE admin_user = %s", (admin_username,))
        user = cursor.fetchone()

        if not user:
            return jsonify({"message": "User not found"}), 404

        if not check_password_hash(user["admin_pass"], admin_password):
            return jsonify({"message": "Invalid credentials"}), 401

        # ✅ Create JWT access token (short-lived - 15 minutes)
        access_token = create_access_token(
            identity=str(user["id"]),
            additional_claims={
                "username": user["admin_user"],
                "role": user["role"],
                "type": "admin"
            },
            expires_delta=datetime.timedelta(minutes=15)
        )

        # ✅ Create refresh token (long-lived - 7 days)
        refresh_token = create_refresh_token(
            identity=str(user["id"]),
            additional_claims={
                "username": user["admin_user"],
                "role": user["role"],
                "type": "admin_refresh"
            },
            expires_delta=datetime.timedelta(days=7)
        )


        user_data = {
            "admin_id": user["id"],
            "username": user["admin_user"],
            "role": user["role"],
            "navigate": "/dashboard",
            "token_expires": (datetime.datetime.utcnow() + datetime.timedelta(minutes=15)).timestamp()
        }


        encoded_data = urllib.parse.quote(json.dumps(user_data))


        response = make_response(jsonify({
            "message": "Login successful",
            #"navigate": "/dashboard",
            #"user": user_data  # Also send in response for initial frontend state
        }), 200)

        # Set JWT access token (HttpOnly)
        set_access_cookies(response, access_token)
        
        # Set JWT refresh token (HttpOnly)
        set_refresh_cookies(response, refresh_token)

        # Set readable cookie for frontend (with expiration)
        response.set_cookie(
            "userData",
            encoded_data,
            httponly=False,
            samesite="Lax",
            secure=Config.JWT_COOKIE_SECURE,
            max_age=15 * 60  # 15 minutes (matches access token)
        )

        return response

    except Exception as e:
        print(f"Login error: {str(e)}")  # Debug print
        return jsonify({"error": "Internal server error"}), 500
    finally:
        if conn:
            cursor.close()
            conn.close()


# ✅ Token Refresh Endpoint
@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)  # Only accepts refresh tokens
def refresh_tokens():
    try:
        current_id = get_jwt_identity()
        claims = get_jwt()
        
        # ✅ Create new access token
        new_access_token = create_access_token(
            identity=current_id,
            additional_claims={
                "username": claims.get("username"),
                "role": claims.get["role"],
                "type": "admin"
            },
            expires_delta=datetime.timedelta(minutes=15)
        )
        
        # ✅ Update user data cookie
        user_data = {
            "admin_id": current_id,
            "username": claims.get("username"),
            "role": claims.get["role"],
            "token_expires": (datetime.datetime.utcnow() + datetime.timedelta(minutes=15)).timestamp()
        }
        
        encoded_data = urllib.parse.quote(json.dumps(user_data))
        
        response = jsonify({
            "message": "Token refreshed",
            "user": user_data
        })
        
        set_access_cookies(response, new_access_token)
        
        # Update frontend cookie
        response.set_cookie(
            "userData",
            encoded_data,
            httponly=False,
            samesite="Lax",
            secure=Config.JWT_COOKIE_SECURE,
            max_age=15 * 60
        )
        
        return response
        
    except Exception as e:
        return jsonify({"message": "Refresh failed"}), 401

# ✅ Enhanced Logout - Ensure all cookies are cleared
@auth_bp.route("/logout", methods=["POST"])
def logout():
    try:
        response = jsonify({"message": "Logout successful"})
        
        # Clear all JWT cookies
        unset_access_cookies(response)
        unset_refresh_cookies(response)
        
        # Clear frontend cookie
        response.set_cookie(
            "userData",
            "",
            expires=0,
            httponly=False,
            samesite="Lax",
            secure=Config.JWT_COOKIE_SECURE
        )
        
        # Additional cleanup for CSRF tokens if used
        response.set_cookie(
            "csrf_access_token",
            "",
            expires=0,
            httponly=True,
            samesite="Lax",
            secure=Config.JWT_COOKIE_SECURE
        )
        
        response.set_cookie(
            "csrf_refresh_token",
            "",
            expires=0,
            httponly=True,
            samesite="Lax",
            secure=Config.JWT_COOKIE_SECURE
        )
        
        return response
        
    except Exception as e:
        print(f"Logout error: {str(e)}")
        return jsonify({"message": "Logout failed"}), 500


@auth_bp.route("/register", methods=["POST"])
def register_admin():
    data = request.get_json()
    admin_username = data.get("admin_username")
    admin_password = data.get("admin_password")

    if not admin_username or not admin_password:
        return jsonify({"error": "Username and password required"}), 400

    try:
        conn = get_connection()
        cursor = conn.cursor()

        # Hash password before saving
        hashed_pw = hash_password(admin_password)

        # Insert new admin
        cursor.execute(
            "INSERT INTO admin_accounts (admin_user, admin_pass) VALUES (%s, %s) RETURNING id",
            (admin_username, hashed_pw),
        )
        admin_id = cursor.fetchone()

        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({"message": "Admin registered successfully", "id": admin_id}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if conn:
            cursor.close()
            conn.close()
 
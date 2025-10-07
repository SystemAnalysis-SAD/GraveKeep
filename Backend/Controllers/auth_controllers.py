from flask import Blueprint, request, jsonify, Response, make_response
from Models.database import get_connection
from Utils.hash_passwords import hash_password, check_password_hash
from Config.config import Config
import jwt
import datetime
from flask_jwt_extended import create_access_token, set_access_cookies, unset_access_cookies

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/login', methods=['POST'])
def Admin_login():
    data = request.get_json()
    admin_username = data.get('admin_username')
    admin_password = data.get('admin_password')

    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM admin_accounts WHERE admin_user = %s', (admin_username,))
        user = cursor.fetchone()

        if not user:
            return jsonify({"message": "User not found"}), 404

        if not check_password_hash(user['admin_pass'], admin_password):
            return jsonify({'message': 'Invalid credentials'}), 401

        # Create JWT token
        access_token = create_access_token(identity=admin_username)

        # Create a response and set cookie
        response = make_response(jsonify({"message": "Login successful", "navigate": "/dashboard"}), 200)
        set_access_cookies(response, access_token)
        return response

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        if conn:
            cursor.close()
            conn.close()


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

@auth_bp.route('/logout', methods=['POST'])
def logout():
     response = jsonify({"message": "Logout successful", "navigate": "/login"})
     
     unset_access_cookies(response)
     return response, 200
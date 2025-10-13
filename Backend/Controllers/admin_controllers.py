from flask import Blueprint, jsonify, make_response, request
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
from Models.database import get_connection
import json, urllib.parse
from itsdangerous import BadSignature, URLSafeSerializer
from Config.config import Config

admin_bp = Blueprint("admin_auth", __name__)

@admin_bp.route("/dashboard", methods=["GET"])
@jwt_required(locations=["cookies"])
def admin_info():
    return jsonify({"status": "Authenticated"})



""" @admin_bp.route("/users", methods=["GET"])
@jwt_required(locations=["cookies"])
def get_all_users():
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, email, age, created_at FROM users_table ORDER BY id ASC")
        users = cursor.fetchall()

        # Convert PostgreSQL result to list of dicts
        user_list = []
        for u in users:
            user_list.append({
                "id": u['id'],
                "name": u['name'],
                "email": u['email'],
                "age": u['age'],
                "created_at": u['created_at'].strftime("%Y-%m-%d %H:%M:%S")
            })

        return jsonify({"users": user_list}), 200
    except Exception as e:
        return jsonify({"error":  str(e)}), 500
    finally:
        cursor.close()
        conn.close() """
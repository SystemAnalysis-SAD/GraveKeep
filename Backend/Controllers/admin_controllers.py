from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from Models.database import get_connection

admin_bp = Blueprint("admin_auth", __name__)

@admin_bp.route('/dashboard', methods=['GET'])
@jwt_required(locations=["cookies"])
def get_current_admin():
    current_user = get_jwt_identity()
    return jsonify({"admin_username": current_user}), 200

@admin_bp.route("/users", methods=["GET"])
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
        conn.close()
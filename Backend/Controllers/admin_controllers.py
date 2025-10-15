from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from Middleware.middleware import role_required

admin_bp = Blueprint("admin_auth", __name__)

@admin_bp.route("/dashboard", methods=["GET"])
@jwt_required(locations=["cookies"])
@role_required('Admin')
def admin_info():
    return jsonify({"status": "Authenticated"})


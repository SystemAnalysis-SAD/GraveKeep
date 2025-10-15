from flask_jwt_extended import verify_jwt_in_request, get_jwt
from functools import wraps
from flask import jsonify

def role_required(allowed_role):
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            if claims.get("role") != allowed_role:
                return jsonify(msg="Forbidden")
            return fn(*args, **kwargs)
        return decorator
    return wrapper

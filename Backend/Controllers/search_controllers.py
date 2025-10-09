from flask import Blueprint, request, jsonify
from Models.database import get_connection

search_bp = Blueprint("search_bp", __name__)

@search_bp.route("/search", methods=["GET"])
def search():
    q = request.args.get("q", "").strip()

    # Return empty list if no query
    if not q:
        return jsonify([])

    conn = get_connection()
    cursor = conn.cursor()

    # Search across all name fields
    cursor.execute("""
        SELECT id, first_name, middle_name, last_name, dob, dod
        FROM decedent
        WHERE CONCAT(first_name, ' ', middle_name, ' ', last_name) ILIKE %s
           OR first_name ILIKE %s
           OR middle_name ILIKE %s
           OR last_name ILIKE %s;
    """, (f"%{q}%", f"%{q}%", f"%{q}%", f"%{q}%"))

    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(rows)
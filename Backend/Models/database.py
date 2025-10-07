import psycopg2
from psycopg2.extras import RealDictCursor
from Config.config import Config

def get_connection():
    try:
        conn = psycopg2.connect(Config.DB_URL, cursor_factory=RealDictCursor)
        print("Database Connected")
        return conn
    except Exception as e:
        print("Database Connection Failed: ", str(e))
        return None
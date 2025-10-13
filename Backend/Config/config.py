import os
from dotenv import load_dotenv
import datetime
load_dotenv()

class Config:
    DB_URL = os.getenv("DB_URL")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET") or "supersecretkey"
    JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
    JWT_COOKIE_SECURE = True
    JWT_COOKIE_SAMESITE = "None"
    JWT_ACCESS_COOKIE_PATH = "/"

    JWT_ACCESS_TOKEN_EXPIRES = datetime.timedelta(minutes=15)
    JWT_REFRESH_TOKEN_EXPIRES = datetime.timedelta(days=7)
    JWT_TOKEN_LOCATION = ["cookies"]
    JWT_COOKIE_CSRF_PROTECT = False  # Set to True if using CSRF protection
    
    # Cookie names
    JWT_ACCESS_COOKIE_NAME = "access_token_cookie"
    JWT_REFRESH_COOKIE_NAME = "refresh_token_cookie"

import os
from dotenv import load_dotenv
load_dotenv()

class Config:
    DB_URL = os.getenv("DB_URL")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET") or "supersecretkey"
    JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
    JWT_COOKIE_SECURE = True
    JWT_COOKIE_SAMESITE = "None"
    JWT_ACCESS_COOKIE_PATH = "/"

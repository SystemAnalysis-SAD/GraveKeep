from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from Config.config import Config 

#initialize app
app = Flask(__name__)
app.config.from_object(Config) 

jwt = JWTManager(app)

CORS(app,supports_credentials=True)

#blueprint connection
from Controllers.auth_controllers import auth_bp
from Controllers.admin_controllers import admin_bp
app.register_blueprint(admin_bp)
app.register_blueprint(auth_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
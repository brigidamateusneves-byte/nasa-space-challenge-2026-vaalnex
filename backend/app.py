
from flask import Flask, jsonify
from flask_cors import CORS

from routes.login import login_bp
from routes.missoes import missoes_bp

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "API Flask funcionando!"
    })

app.register_blueprint(login_bp)
app.register_blueprint(missoes_bp)

if __name__ == "__main__":
    app.run(debug=True, port=5000)
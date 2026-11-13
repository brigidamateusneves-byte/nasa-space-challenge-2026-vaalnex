from flask import Blueprint, jsonify, request

login_bp = Blueprint("login", __name__)

@login_bp.route("/api/login", methods=["POST"])
def login():
    dados = request.get_json(silent=True) or {}

    email = dados.get("email")
    password = dados.get("password")

    if not email or not password:
        return jsonify({
            "erro": "Email e palavra-passe são obrigatórios"
        }), 400

    return jsonify({
        "message": "Login recebido",
        "email": email
    }), 200
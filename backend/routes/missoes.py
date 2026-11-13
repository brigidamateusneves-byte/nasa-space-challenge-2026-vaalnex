from flask import Blueprint, jsonify

missoes_bp = Blueprint("missoes", __name__)

@missoes_bp.route("/api/missoes", methods=["GET"])
def missoes():

    lista_missoes = [
        {"id": 1, "nome": "Verificar nível de oxigénio"},
        {"id": 2, "nome": "Verificar sistema de energia"},
        {"id": 3, "nome": "Inspecionar nave espacial"}
    ]

    return jsonify(lista_missoes)
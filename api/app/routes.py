from app import app
from flask import request, jsonify
import json
from app.calculator import GradeCalculator, gradeCalculation
from flask_cors import CORS

cors = CORS(app, resources={r"/api/calculate": {"origins": "http://localhost:3000"}})

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/calculate', methods=['GET'])
def home():
    if request.args:
        Grades = dict(request.args.lists())
        result = gradeCalculation(Grades)
    else:
        result = "Error"

    print(result)
    return jsonify(result)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')
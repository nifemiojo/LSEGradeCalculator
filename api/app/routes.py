from api.app import app
from flask import request, jsonify
import json
from api.app.calculator import GradeCalculator, gradeCalculation

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
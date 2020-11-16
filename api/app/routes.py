from app import app
from flask import request, jsonify
import json
from app.calculator import GradeCalculator, gradeCalculation
from flask_cors import CORS

cors = CORS(app, resources={r"/": {"origins": "http://localhost:3000"}})

@app.route('/', methods=['GET'])
def home():
    if request.args:
        Grades = dict(request.args.lists())
        result = gradeCalculation(Grades)
    else:
        result = "Error"

    print(result)
    return jsonify(result)
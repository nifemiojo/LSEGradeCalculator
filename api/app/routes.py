from app import app
from flask import request, jsonify
import json
from app.calculator import GradeCalculator, gradeCalculation

@app.route('/', methods=['GET'])
def home():
    if request.args:
        Grades = dict(request.args.lists())
        result = gradeCalculation(Grades)
    else:
        result = "Error"

    
    return result
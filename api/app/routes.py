from app import app
from flask import request

@app.route('/', methods=['GET', 'POST'])
def home():
    return f"{request.form}"
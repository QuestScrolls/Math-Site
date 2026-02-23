from flask import Flask, render_template, request, jsonify
from mathematics import summation, subtraction, multiplication

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/sum")
def sum_route():
    try:
        num1 = float(request.args.get('num1'))
        num2 = float(request.args.get('num2'))
        result = summation(num1, num2)
        return jsonify({"result": result})
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid numbers provided"}), 400

@app.route("/sub")
def sub_route():
    try:
        num1 = float(request.args.get('num1'))
        num2 = float(request.args.get('num2'))
        result = subtraction(num1, num2)
        return jsonify({"result": result})
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid numbers provided"}), 400

@app.route("/mul")
def mul_route():
    try:
        num1 = float(request.args.get('num1'))
        num2 = float(request.args.get('num2'))
        result = multiplication(num1, num2)
        return jsonify({"result": result})
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid numbers provided"}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)

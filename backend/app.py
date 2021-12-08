from flask import Flask, Response
from flask import jsonify
from flask_restful import Resource, Api
from flask_restful import reqparse
from flask_cors import CORS
from db import camisas
import json

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


class HelloWorld(Resource):
    def get(self):
        return {'items': camisas}

api.add_resource(HelloWorld, '/api/')

@app.route('/api/test', methods=['GET'])
def get_users():
    print("vida hpta")
    response = {'body': 'mierda'}
    return Response(response=json.dumps(response),
        status=200,
        mimetype="application/json"
    )


if __name__ == "__main__":
    app.run(debug=True, port=5006, host="127.0.0.1")  # run the flask app on debug mode
from flask import Flask, Response, request
from flask import jsonify
from flask_restful import Resource
from flask_restful import Api
from flask_restful import reqparse
from flask_restful import abort
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

class ReturnPO(Resource):
    def get(self):
        response = ""
        with open('foo.txt') as f:
            lines = f.readlines()
            for line in lines:
                print(line)
                response = line
        return {'compra': line}

api.add_resource(ReturnPO, '/api/ReturnPO')

class SetOrder(Resource):
    def post(self):
        json_data = request.get_json(force=True)
        ordenes = json_data['ordenes']
        final_name = ""
        final_name+="\n "
        final_price = 0
        for e in ordenes:
            final_name +=e['name']
            final_name += "-"
            final_price+=e['price']
        final_name+=f"Precio: {final_price}"
        with open("foo.txt", "a") as f:
            f.write(final_name)
        return {'Message': 'Success'}

api.add_resource(SetOrder, '/api/setorder')

@app.route('/api/setOrder', methods=['GET', 'POST'])
def get_users():
    print("vida hpta")
    response = {'body': 'mierda'}
    return Response(response=json.dumps(response),
        status=200,
        mimetype="application/json"
    )


if __name__ == "__main__":
    app.run(debug=True, port=5006, host="127.0.0.1")  # run the flask app on debug mode
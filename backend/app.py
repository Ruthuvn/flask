from flask import Flask, request, jsonify
from dotenv import load_dotenv
import os
import pymongo
import json


# Load environment variables
load_dotenv()

# Get Mongo URI from .env
MONGO_URI = os.getenv("MONGO_URI")

# Connect to MongoDB
client = pymongo.MongoClient(MONGO_URI)
db = client.test
collection = db["flask"]

app = Flask(__name__)


@app.route('/')
def home():
    return "Welcome! Go to /view to see data."


# Submit Route
@app.route('/submit', methods=['POST'])
def submit():
    form_data = request.json
    collection.insert_one(form_data)
    return "Data submitted successfully!"

# View Route
@app.route('/view')
def view():
    data = list(collection.find({}, {'_id': 0, "name": 1, "password": 1}))  

    return jsonify(data)

# API Route (Reads from JSON file)
@app.route('/api')
def api():
    with open('data.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9000, debug=True)
    
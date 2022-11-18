import numpy as np
from flask import Flask, request
from flask_restful import Api

import utils.mongo as mongo
from faceapi.faceEncoding import encodeFace, saveEncoding
from faceapi.faceRecognition import recogniseFace

D_TYPE = 'uint8'
URI = 'mongodb://localhost:27017'
DB_NAME = 'ffr'
COLL_NAME = 'encodings'

app = Flask(__name__)
api = Api(app)

connection = mongo.Connection(URI, DB_NAME)
collection = mongo.Collection(connection, COLL_NAME)

@app.post('/ffr/encode')
def encode():
  file = request.files['file']
  label = request.form['label']
  buff = np.asarray(bytearray(file.stream.read()), dtype=D_TYPE)
  try:
    data = encodeFace(label, buff)
    saveEncoding(data, collection)
    return { 'response': 'Encoded with success' }
  except Exception as e:
    return { 'message': str(e) }, 400

@app.post('/ffr/recognise')
def recognise():
  file = request.files['file']
  buff = np.asarray(bytearray(file.stream.read()), dtype=D_TYPE)
  try:
    result = recogniseFace(buff, collection)
    return result
  except Exception as e:
    print(e)
    return { 'message': str(e) }, 400

app.run()
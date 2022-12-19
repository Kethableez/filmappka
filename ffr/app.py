import numpy as np
from flask import Flask, request
from flask_restful import Api
from urllib.error import HTTPError
from flask_cors import CORS
import utils.mongo as mongo
from faceapi.faceEncoding import encodeFace, saveEncoding
from faceapi.faceRecognition import recogniseFace
from faceapi.moodDetection import detectMood
from movieapi.movieRecommending import recommendMovies

D_TYPE = 'uint8'
URI = 'mongodb://ffr-db:27000'
DB_NAME = 'ffr'
COLL_NAME = 'encodings'
API_KEY = '637766840968febde7076eeb'


app = Flask(__name__)
cors = CORS(app, resources={r"/ffr/*": {"origins": "*"}})
api = Api(app)

connection = mongo.Connection(URI, DB_NAME)
collection = mongo.Collection(connection, COLL_NAME)

def validateKey(key):
  if not key or key != API_KEY:
    raise HTTPError('asd', 401, 'Invalid or empty API KEY', 'asd', None)

@app.post('/ffr/encode')
def encode():
  try:
    apiKey = request.headers.get('Key')
    validateKey(apiKey)
  except HTTPError as e:
    print(e)
    return { 'message': e.msg }, e.status

  file = request.files['file']
  label = request.form['label']
  buff = np.asarray(bytearray(file.stream.read()), dtype=D_TYPE)
  print(file, label)
  try:
    data = encodeFace(label, buff)
    print(data)
    saveEncoding(data, collection)
    print('saved')
    return { 'message': 'Encoded with success' }
  except Exception as e:
    return { 'message': str(e) }, 400

@app.post('/ffr/recognise')
def recognise():
  try:
    apiKey = request.headers.get('Key')
    validateKey(apiKey)
  except HTTPError as e:
    print(e)
    return { 'message': e.msg }, e.status

  file = request.files['file']
  buff = np.asarray(bytearray(file.stream.read()), dtype=D_TYPE)
  try:
    result = recogniseFace(buff, collection)
    return result
  except Exception as e:
    print(e)
    return { 'message': str(e) }, 400

@app.post('/ffr/emotion')
def emotions():
  try:
    apiKey = request.headers.get('Key')
    validateKey(apiKey)
  except HTTPError as e:
    print(e)
    return { 'message': e.msg }, e.status
  file = request.files['file']
  buff = np.asarray(bytearray(file.stream.read()), dtype=D_TYPE)
  try:
    result = detectMood(buff)
    return result
  except Exception as e:
    return { 'message': str(e) }, 400

@app.post('/ffr/recommendations')
def recommendation():

  requestData = request.json['emotion']
  mood = ""

  # traverse in the string
  for ele in requestData:
    mood += ele

  print(mood)
  try:
    result = recommendMovies(mood)
    print('recommended')
    return result
  except Exception as e:
    print(e)
    return { 'message': str(e) }, 400

@app.get('/ffr/health')
def healthCheck():
  return { 'message': 'up an running'}

if __name__ == '__main__':
  app.run(port=7000)
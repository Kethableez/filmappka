import ast
import json
import base64
import numpy as np
import pandas as pd
from flask import Flask, request
from flask_restful import Api, Resource, reqparse
import os

import utils.mongo as mongo
from faceapi.faceEncoding import encodeFace, saveEncoding
from faceapi.faceRecognition import recogniseFace
from utils.bufferCollector import collectBuffer

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
  data = encodeFace(label, buff)
  saveEncoding(data, collection)
  return { 'response': 'Encoded with success' }

@app.post('/ffr/recognise')
def recognise():
  file = request.files['file']
  buff = np.asarray(bytearray(file.stream.read()), dtype=D_TYPE)
  result = recogniseFace(buff, collection)
  return result

app.run()
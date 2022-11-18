import utils.mongo as mongo
from faceapi.faceEncoding import encodeFace, saveEncoding
from faceapi.faceRecognition import recogniseFace
from utils.argParser import Parser
from utils.bufferCollector import collectBuffer

URI = 'mongodb://localhost:27017'
DB_NAME = 'ffr'
COLL_NAME = 'encodings'

def initCollection():
  conn = mongo.Connection(URI, DB_NAME)
  coll = mongo.Collection(conn, COLL_NAME)
  return coll

collection = initCollection()
args = Parser().parse()


file, mode, label = args.file, args.mode, args.label

if not label and mode == 'e' or mode == 'encode':
  raise Exception('Erons')

buff = collectBuffer(file)

if (mode == 'r' or mode == 'recognise'):
  results = recogniseFace(buff, collection)
  print('[RECOGNITION]')
  if results['results'] == 'NONE':
    print('No face was recognised')
  else:
    print('Done with success!', results['results'])

else:
  data = encodeFace(label, buff)
  saveEncoding(data, collection)
  print('[ENCODING]')
  print('Done with success!')

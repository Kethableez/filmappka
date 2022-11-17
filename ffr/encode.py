from imutils import paths
from imutils.video import VideoStream
import face_recognition
import cv2
import os
import pickle
from collections import Counter

PATH = '/encodings.pickle'

def savePickle(label, filePath):
  knownEncodings, knownNames = [], []
  picklePath = picklePath
  if (os.path.exists(picklePath)):
    pickles = pickle.loads(open(picklePath, 'rb').read())
    knownNames.extend(pickles.get('names'))
    knownEncodings.extend(pickles.get('encodings'))
  
  path = os.getcwd() + '/data' + filePath
  print(path)
  image, name = cv2.imread(path), label
  rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
  boxes = face_recognition.face_locations(rgb,  model='cnn')    #detection_method here
  for encoding in face_recognition.face_encodings(rgb, boxes):
    knownEncodings.append(encoding)
    knownNames.append(name)

  data = {'encodings': knownEncodings, 'names': knownNames}
  print(data)

  filePath = picklePath
  f = open(filePath, 'wb')
  f.write(pickle.dumps(data))
  f.close()

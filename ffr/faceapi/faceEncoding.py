import cv2
import face_recognition
import utils.mongo as mongo

def encodeFace(label, buff):
  encodings = []
  # img = cv2.imdecode(buff, cv2.IMREAD_ANYCOLOR)
  img = cv2.imdecode(buff, flags=1)
  rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
  boxes = face_recognition.face_locations(rgb,  model='hog')    #detection_method here
  encodings = face_recognition.face_encodings(rgb, boxes)
  # if len(encodings) == 0:
  #   raise Exception('No encodings found')
  return { 'encodings': list(encodings[0]), 'name': label }

def saveEncoding(data, collection: mongo.Collection):
  collection.saveOne(data)
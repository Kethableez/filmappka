import utils.mongo as mongo
import cv2
import face_recognition
from collections import Counter


def getData(encodings):
  data = {
    'encodings': [],
    'names': []
  }

  for encoding in encodings:
    data['encodings'].append(encoding['encodings'])
    data['names'].append(encoding['name'])

  return data

def recogniseFace(buff, coll: mongo.Collection):
  data = getData(coll.getAll())
  img = cv2.imdecode(buff, cv2.IMREAD_ANYCOLOR)
  rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
  boxes = face_recognition.face_locations(rgb, model='hog')
  encodings = face_recognition.face_encodings(rgb, boxes)
  names = []
  for encoding in encodings:
    votes = face_recognition.compare_faces(data['encodings'], encoding)
    if True in votes:
      n = Counter([name for name, vote in list(zip(data['names'], votes)) if vote == True]).most_common()[0][0]
      names.append(n)
  if len(names) == 0:
    raise Exception('[FFR - REC] No face were recognised')
  else:
    return { 'results': names }
from imutils import paths
from imutils.video import VideoStream
import imutils
import face_recognition
import cv2
import os
import pickle
import time
from collections import Counter

ti = time.time()
print('[INFO] creating facial embeddings...')
try:
  data = pickle.loads(open(os.getcwd() + '/encodings.pickleeeee', 'rb').read())    #encodings here
except FileNotFoundError:
  knownEncodings, knownNames = [], []
  print(os.getcwd())

  imagePaths = list(paths.list_images(os.getcwd() + '/data'))    #dataset here
  print(imagePaths)
  for (i, imagePath) in enumerate(imagePaths):
    print('{}/{}'.format(i+1, len(imagePaths)), end=', ')
    image, name = cv2.imread(imagePath), imagePath.split(os.path.sep)[-2]
    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    boxes = face_recognition.face_locations(rgb,  model='cnn')    #detection_method here
    for encoding in face_recognition.face_encodings(rgb, boxes):
      knownEncodings.append(encoding)
      knownNames.append(name)
  data = {'encodings': knownEncodings, 'names': knownNames}
  print(data)
  f = open(os.getcwd() + '/encodingss.pickle', 'wb')
  f.write(pickle.dumps(data))
  f.close()

print('Done! \n[INFO] recognising faces in image...')

imagePaths = list(paths.list_images(os.getcwd() + '/test'))    #test image here
for (_, imagePath) in enumerate(imagePaths):
  if '_output' not in imagePath:
    image = cv2.imread(imagePath)
    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    boxes = face_recognition.face_locations(rgb, model='cnn')    #detection_method here
    encodings = face_recognition.face_encodings(rgb, boxes)
    names = []
    for encoding in encodings:
      votes = face_recognition.compare_faces(data['encodings'], encoding)
      if True in votes:
        names.append(Counter([name for name, vote in list(zip(data['names'], votes)) if vote == True]).most_common()[0][0])
      else:
        names.append('Unknown')
    for ((top, right, bottom, left), name) in zip(boxes, names):
      cv2.rectangle(image, (left, top), (right, bottom), (0, 255, 0), 2)
      y = top - 15 if top - 15 > 15 else top + 15
      cv2.putText(image, name, (left, y), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2)
    cv2.imwrite(imagePath.rsplit('.', 1)[0] + '_output.jpg', image)

print('Done! \nTime taken: {:.1f} minutes'.format((time.time() - ti)/60))
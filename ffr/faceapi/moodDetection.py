from deepface import DeepFace as DF
import cv2

def detectMood(buff):
  try:
    img = cv2.imdecode(buff, cv2.IMREAD_ANYCOLOR)
    predictions = DF.analyze(img)
    return predictions['emotion']
  except Exception as e:
    raise Exception('[FFR - MDT] No face were recognised')
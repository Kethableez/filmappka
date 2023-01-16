from fer import FER
import cv2

def detectMood(buff):
  try:
    img = cv2.imdecode(buff, cv2.IMREAD_ANYCOLOR)
    detector = FER()
    predictions = detector.detect_emotions(img)
    print(predictions[0]['emotions'])
    return predictions[0]['emotions']
  except Exception as e:
    raise Exception('[FFR - MDT] No face were recognised')
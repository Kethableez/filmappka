import numpy as np
import os.path as path
from os import getcwd

DATA_DIR = 'data'
D_TYPE = 'uint8'

def collectBuffer(pathEnd: str):
  file = open(path.join(getcwd(), DATA_DIR, pathEnd), 'rb')
  return np.asarray(bytearray(file.read()), dtype=D_TYPE)
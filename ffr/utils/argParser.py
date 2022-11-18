import argparse

class Parser:
  def __init__(self):
    self.parser = argparse.ArgumentParser(description='CLI for face recognition')
    self.parser.add_argument("--file", '-f', type=str, help='Filename in \\data directory ')
    self.parser.add_argument("--label", '-l', type=str, help='Label for encoding')
    self.parser.add_argument("-mode", '-m', type=str, choices=['e', 'encode', 'r', 'recognise'], help='Mode')

  def parse(self):
    return self.parser.parse_args()
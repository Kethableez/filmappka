import pymongo

class Connection:
  def __init__(self, uri: str, name: str):
    self.client = pymongo.MongoClient(uri)
    self.db = self.client[name]


class Collection:
  def __init__(self, connection: Connection, name: str):
    self.collection = connection.db[name]

  def saveOne(self, data):
    self.collection.insert_one(data)

  def getAll(self):
    return list(self.collection.find())




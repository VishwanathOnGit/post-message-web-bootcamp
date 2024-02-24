const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
mongoose.set("debug", true);
mongoose.Promise = Promise;

async function startInMemoryMongoDB() {
  const mongod = new MongoMemoryServer();
  const uri = await mongod.getUri();
  console.log("In-memory MongoDB URI:", uri);
  mongoose.connect(uri);
}

startInMemoryMongoDB();

module.exports.User = require("./user");
module.exports.Message = require("./message");

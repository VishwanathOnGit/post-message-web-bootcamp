const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/messagingApp-server", {
  keepAlive: true,
  useMongoClient: true,
});

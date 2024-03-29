require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/api/auth', authRoutes);

app.use(function (req, res, next) {
  // Show not found if no route exists
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});

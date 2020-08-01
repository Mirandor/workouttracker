const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const gradient = require('gradient-string');

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(gradient.cristal(`App running on http://localhost:${PORT}!`));
});
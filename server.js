// Dependencies
var express = require("express");
require('dotenv').config();
// https://www.npmjs.com/package/dotenv

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

// tell node we are creating an "express" server
var app = express();

// set initial port
var PORT = process.env.PORT || 8080;

// tell express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// server maps
require("")(app);
require("")(app);

// Routes
// =============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  app.get("", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  app.get("", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });
// Listener - starts the server
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});
const path = require("path");
const express = require("express");
const auth = require("./routes/authRoutes");
const walks = require("./routes/walks");
const users = require("./routes/users");
const rating = require("./routes/rating");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");

const server = express();

require("./config/passport");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(passport.initialize());
// server.use(express.json())
server.use(express.static(path.join(__dirname, "./public")));
server.use(cors());

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
server.use("http://walkland.herokuapp.com/api/v1/auth", auth);
server.use("/api/v1/walks", walks);
server.use("/api/v1/users", users);
server.use("/api/v1/rating", rating);

module.exports = server;

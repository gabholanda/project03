require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const bcrypt = require("bcrypt");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

require('./config/passport');

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// Session sets
app.use(
  session({
    secret: "cinexp",
    resave: true,
    saveUninitialized: true
  })
);

// passport initialize session
app.use(passport.initialize());
app.use(passport.session());

// CORS Sets
app.use(cors({
  credentials: true,
  origin: [process.env.REACT_APP] // <== this will be the URL of our React app (it will be running on port 3000)
}));

const index = require("./routes/index");
app.use("/", index);

const user = require("./routes/user");
app.use("/api", user);

const event = require("./routes/event");
app.use("/api", event);

const movie = require("./routes/movie");
app.use("/api", movie);

// index for react
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});
module.exports = app;

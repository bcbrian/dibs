require("dotenv").config();
const express = require("express"),
  methodOverride = require("method-override"),
  bodyParser = require("body-parser"),
  expressSanitizer = require("express-sanitizer"),
  passport = require("passport"),
  session = require("express-session"),
  db = require("./models/index"),
  users = require("./routes/api/users"),
  app = express(),
  PORT = process.env.PORT || 3033;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// For Passport
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// ); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
const API = require("./routes/api/api-routes");
API.api(app);

app.use("/api/v1/user", users);

// Commented out auth for now - this may get taken care of on front end
// const authAPI = require("./routes/api/auth");
// authAPI.api(app, passport);

//load passport strategies
// require("./config/passport.js")(passport, db.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

require("dotenv").config();
const path = require("path");
const express = require("express");
const db = require("./models");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./routes/api/api-routes");
// const games = require("./routes/api/games");

const app = express();
const PORT = process.env.PORT || 3000;

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Config

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

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes - This will Need to Be UPDATED once Routes are complete
// CHECK THESE ROUTES!!!!!
app.use("/api/api-routes", routes);
// app.use("/api/v1/games", games);

app.use("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

module.exports = app;

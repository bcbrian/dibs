const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const db = require("../../models");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  console.log("user :", req.body);
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  db.Users.findOne({ where: { email: req.body.email } }).then(user => {
    console.log(req.body.email);
    console.log(user);
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          //Need to figure out syntax to push this through
          db.Users.create(newUser)
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //UPDATE DB, DELETE TABLE AND START OVER

  // Find user by email
  db.Users.findAll({
    where: {
      email: email
    }
  })
    .then(users => {
      const user = users[0]; // this line seems to be restricting access to 1 user
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
      console.log(user);
      console.log(password, user.password);

      // Check password
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // User matched
            // Create JWT Payload
            const payload = {
              id: user.id,
              name: user.name
            };

            // Sign token
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 31556926 // 1 year in seconds
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        })
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
});

module.exports = router;

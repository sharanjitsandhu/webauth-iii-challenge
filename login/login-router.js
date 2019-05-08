const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users-model.js");
const secrets = require("../config/secrets.js");

const router = express.Router();

// Use the credentials sent inside the body to authenticate the user. On successful login,
//  create a new JWT with the user id as the subject and send it back to the client.
// If login fails, respond with the correct status code and the message: 'You shall not pass!'
router.post("/", (req, res) => {
  let { username, password } = req.body;
  // we compare the password guess against the database hash
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({ message: `Successfully logged in ${username}!`, token });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    id: user.id, // what the token is describing
    username: user.username
  };
  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;

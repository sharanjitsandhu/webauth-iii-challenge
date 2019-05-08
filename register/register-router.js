const express = require("express");
const bcrypt = require("bcryptjs");

const Users = require("../users-model.js");

const router = express.Router();

// Creates a user using the information sent inside the body of the request.
// Hash the password before saving the user to the database.
router.post("/", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2^10 rounds
  // pass > hash it > hash > hash it......
  // hash the password
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;

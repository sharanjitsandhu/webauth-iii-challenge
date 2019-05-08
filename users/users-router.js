const express = require("express");

const Users = require("../users-model.js");
const restricted = require("../auth/restricted-middleware.js");

const router = express.Router();
// protect/restrict this route, users must provide valid credentials(username/password) to see the list of users
// If the user is logged in, respond with an array of all the users contained in the database.
// If the user is not logged in respond with the correct status code and the message: 'You shall not pass!'. Use this endpoint to verify that the password is hashed before it is saved.
router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
      // res.json({ users, decodedToken: req.decodedToken });
    })
    .catch(err => res.send(err));
});

module.exports = router;

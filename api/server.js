const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const registerRouter = require("../register/register-router.js");
const loginRouter = require("../login/login-router.js");
const usersRouter = require("../users/users-router.js");
const logoutRouter = require("../logout/logout-router.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", usersRouter);
server.use("/api/logout", logoutRouter);

server.get("/", (req, res) => {
  res.send("It's working!");
});

module.exports = server;

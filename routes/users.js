const express = require("express");
const router = express.Router();

const getUser = require("../controllers/user/middleware/getUser");
const getUserDetails = require("../controllers/user/middleware/getUserDetails");

const getAllUsers = require("../controllers/user/getAllUsers");
const createUser = require("../controllers/user/createUser");
const getUserById = require("../controllers/user/getUserById");
const deleteUserById = require("../controllers/user/deleteUserById");
const getUserByLoginAndPassword = require("../controllers/user/getUserByLoginAndPassword");

router
  .get("/", getAllUsers)
  .get("/:id", getUser, getUserById)
  .delete("/:id", getUser, deleteUserById)
  .post("/login", getUserDetails, getUserByLoginAndPassword)
  .post("/createUser", createUser);

module.exports = router;

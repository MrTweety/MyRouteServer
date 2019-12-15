const express = require("express");
const router = express.Router();

const getUser = require("../controllers/user/middleware/getUser");
const getUserDetails = require("../controllers/user/middleware/getUserDetails");

const getAllUsers = require("../controllers/user/getAllUsers");
const createUser = require("../controllers/user/createUser");
const getUserById = require("../controllers/user/getUserById");
const deleteUserById = require("../controllers/user/deleteUserById");
const getUserByLoginAndPassword = require("../controllers/user/getUserByLoginAndPassword");
const userLogOut = require("../controllers/user/userLogOut");
const getBasicUserById = require("../controllers/user/getBasicUserById");

router
  .get("/", getAllUsers)
  .get("/getUser", getUser, getUserById)
  .get("/:id", getBasicUserById)
  .delete("/deleteUser", getUser, deleteUserById)
  .post("/login", getUserDetails, getUserByLoginAndPassword)
  .post("/createUser", createUser)
  .post("/logout", userLogOut);

module.exports = router;

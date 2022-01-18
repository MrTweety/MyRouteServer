const express = require("express");
const router = express.Router();

const findUserByJwt = require("../controllers/user/middleware/findUserByJwt");
const findUserById = require("../controllers/user/middleware/findUserById");
const getUserDetails = require("../controllers/user/middleware/getUserDetails");

const getAllUsers = require("../controllers/user/getAllUsers");
const createUser = require("../controllers/user/createUser");
const getCurrentUser = require("../controllers/user/getCurrentUser");
const deleteUserById = require("../controllers/user/deleteUserById");
const getUserByLoginAndPassword = require("../controllers/user/getUserByLoginAndPassword");
const userLogOut = require("../controllers/user/userLogOut");
const getBasicUser = require("../controllers/user/getBasicUser");
const followUserById = require("../controllers/user/followUserById");
const unfollowUserById = require("../controllers/user/unfollowUserById");
const findUsers = require("../controllers/user/findUsers");

router
  .get("/", getAllUsers)
  .get("/getUser", findUserByJwt, getCurrentUser)
  .get("/:id", findUserById, getBasicUser)
  .delete("/deleteUser", findUserByJwt, deleteUserById)
  .post("/login", getUserDetails, getUserByLoginAndPassword)
  .post("/createUser", createUser)
  .post("/logout", userLogOut)
  .post("/follow/:id", findUserByJwt, findUserById, followUserById)
  .post("/unfollow/:id", findUserByJwt, findUserById, unfollowUserById)
  .post("/findUsers", findUsers);

module.exports = router;

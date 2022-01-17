const express = require("express");
const router = express.Router();

const findUserByJwt = require("../controllers/user/middleware/findUserByJwt");
const findUserById = require("../controllers/user/middleware/findUserById");
const getUserDetails = require("../controllers/user/middleware/getUserDetails");

const getAllUsers = require("../controllers/user/getAllUsers");
const createUser = require("../controllers/user/createUser");
const getUserById = require("../controllers/user/getUserById");
const deleteUserById = require("../controllers/user/deleteUserById");
const getUserByLoginAndPassword = require("../controllers/user/getUserByLoginAndPassword");
const userLogOut = require("../controllers/user/userLogOut");
const getBasicUserById = require("../controllers/user/getBasicUserById");
const followUserById = require("../controllers/user/followUserById");
const unfollowUserById = require("../controllers/user/unfollowUserById");
const findUsers = require("../controllers/user/findUsers");

/**
 * @swagger
 * /user/login:
 *   post:
 *      requestBody:
 *         description: login to MyRoute
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     login:
 *                        type: string
 *                        example: Aa
 *                        required: true
 *                     password:
 *                        type: string
 *                        example: Aa
 *                        required: true
 *      summary: Login user
 *      description: Login.
 *      responses:
 *         200:
 *            description: login successful
 *         401:
 *            description: Login fail
 *         500:
 *            description: Login fail - Internal Error
 */
router
  .get("/", getAllUsers)
  .get("/getUser", findUserByJwt, getUserById)
  .get("/:id", findUserById, getBasicUserById)
  .delete("/deleteUser", findUserByJwt, deleteUserById)
  .post("/login", getUserDetails, getUserByLoginAndPassword)
  .post("/createUser", createUser)
  .post("/logout", userLogOut)
  .post("/follow/:id", findUserByJwt, findUserById, followUserById)
  .post("/unfollow/:id", findUserByJwt, findUserById, unfollowUserById)
  .post("/findUsers", findUsers);

/**
 * @swagger
 * /getUsers:
 *   post:
 *      security:
 *         - bearerAuth: []
 *      parameters:
 *         - name: login
 *           in: query
 *           description: number of items to skip
 *           required: true
 *         - name: password
 *           in: query
 *           description: number of items to skip
 *           required: true
 *      summary: Login user
 *      description: Login.
 *      responses:
 *         201:
 *            description: Created
 *         401:
 *            description: Dupa
 */

module.exports = router;

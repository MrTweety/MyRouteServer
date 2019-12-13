const express = require("express");
const router = express.Router();

const getRoute = require("../controllers/routes/middleware/getRoute");
const findComment = require("../controllers/comment/middleware/findComment");

const getAllComments = require("../controllers/comment/getAllComments");
const getCommentById = require("../controllers/comment/getCommentById");
const getCommentsByRouteId = require("../controllers/comment/getCommentsByRouteId");
const createComment = require("../controllers/comment/createComment");
const deleteCommentById = require("../controllers/comment/deleteCommentById");
const updateCommentById = require("../controllers/comment/updateCommentById");

router
  .get("/", getAllComments)
  .get("/:id", findComment, getCommentById)
  .get("/route/:id", getCommentsByRouteId) // get all coments for Route
  .delete("/:id", findComment, deleteCommentById)
  .put("/:id", findComment, updateCommentById)
  .post("/:id", getRoute, createComment);

module.exports = router;

const express = require("express");
const router = express.Router();
const { onlyDevAccess } = require("../middleware/utils");

const getRoute = require("../controllers/routes/middleware/getRoute");
const findComment = require("../controllers/comment/middleware/findComment");

const getAllComments = require("../controllers/comment/getAllComments");
const getCommentById = require("../controllers/comment/getCommentById");
const getCommentsByRouteId = require("../controllers/comment/getCommentsByRouteId");
const createComment = require("../controllers/comment/createComment");
const deleteCommentById = require("../controllers/comment/deleteCommentById");
const updateCommentById = require("../controllers/comment/updateCommentById");

// TODO: check user
router
  .get("/", onlyDevAccess, getAllComments)
  .get("/:id", findComment, getCommentById)
  .delete("/:id", onlyDevAccess, findComment, deleteCommentById)
  .put("/:id", onlyDevAccess, findComment, updateCommentById)
  .get("/route/:id", getCommentsByRouteId) // get all coments for Route
  .post("/route/:id", getRoute, createComment);

module.exports = router;

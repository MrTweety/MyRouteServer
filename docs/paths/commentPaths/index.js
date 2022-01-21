const getAllComments = require("./getAllComments");
const getCommentById = require("./getCommentById");
const deleteCommentById = require("./deleteCommentById");
const updateCommentById = require("./updateCommentById");
const getCommentsByRouteId = require("./getCommentsByRouteId");
const createComment = require("./createComment");

module.exports = {
  paths: {
    "/comment": { ...getAllComments },
    "/comment/{id}": {
      ...getCommentById,
      ...deleteCommentById,
      ...updateCommentById
    },
    "/comment/route/{id}": {
      ...getCommentsByRouteId,
      ...createComment
    }
  }
};

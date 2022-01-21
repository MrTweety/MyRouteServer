const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  get: {
    tags: ["Comment"],
    description: "Get comment by Id",
    operationId: "getCommentById",
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/comment_id" },
        required: true,
        description: "A single comment id"
      }
    ],
    responses: { ...responses, ...BadRequest }
  }
};

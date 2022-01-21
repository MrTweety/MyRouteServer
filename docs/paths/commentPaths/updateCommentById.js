const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  put: {
    tags: ["Comment"],
    description: "Update comment by Id",
    operationId: "updateCommentById",
    deprecated: true,
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/comment_id" },
        example: "61eb2b25c1ce7f273434cb9f",
        required: true,
        description: "A single comment id"
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              comment: {
                type: "string",
                example: "new comment",
                required: true
              }
            }
          }
        }
      }
    },
    responses: { ...responses, ...BadRequest }
  }
};

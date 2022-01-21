const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  post: {
    tags: ["Comment"],
    description: "Create comment",
    operationId: "createComment",
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/route_id" },
        example: "5dfd01efd2324d004b34a90b",
        required: true,
        description: "A single route id"
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/Comment" }
        }
      }
    },
    responses: { ...responses, ...BadRequest }
  }
};

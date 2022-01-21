const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  delete: {
    tags: ["Comment"],
    description: "Delete route by Id",
    operationId: "deleteRouteById",
    deprecated: true,
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/comment_id" },
        example: "61eb2b6aa173cb0f382ebe2c",
        required: true,
        description: "A single route id"
      }
    ],
    responses: { ...responses, ...BadRequest }
  }
};

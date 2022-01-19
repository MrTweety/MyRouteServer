const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  post: {
    tags: ["Routes"],
    description: "Dislike route by Id",
    operationId: "dislikeRouteById",
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/route_id" },
        required: true,
        description: "A single route id"
      }
    ],
    responses: { ...responses, ...BadRequest }
  }
};

const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  post: {
    tags: ["Routes"],
    description: "Like route by Id",
    operationId: "likeRouteById",
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

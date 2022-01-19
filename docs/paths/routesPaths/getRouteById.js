const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  get: {
    tags: ["Routes"],
    description: "Get route by Id",
    operationId: "getRouteById",
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

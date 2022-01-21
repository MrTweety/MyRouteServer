const { responses, BadRequest } = require("../../common/responses");
const { limits } = require("../../common/parameters");

module.exports = {
  get: {
    tags: ["Comment"],
    description: "Get comments by route Id",
    operationId: "getCommentsByRouteId",
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/route_id" },
        required: true,
        description: "A single route id"
      },
      ...limits
    ],
    responses: { ...responses, ...BadRequest }
  }
};

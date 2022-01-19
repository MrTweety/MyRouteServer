const { responses, BadRequest } = require("../../common/responses");
const { limits } = require("../../common/parameters");

module.exports = {
  get: {
    tags: ["Routes"],
    description: "Get routes by user Id",
    operationId: "getRoutesByUserId",
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/user_id" },
        required: true,
        description: "A single user id"
      },
      ...limits
    ],
    responses: { ...responses, ...BadRequest }
  }
};

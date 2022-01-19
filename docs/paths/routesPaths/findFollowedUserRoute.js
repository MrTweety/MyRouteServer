const { responses, BadRequest } = require("../../common/responses");
const { limits } = require("../../common/parameters");

module.exports = {
  get: {
    tags: ["Routes"],
    description: "Get the routes of the users you follow",
    operationId: "findFollowedUserRoute",
    security: [{ bearerAuth: [] }],
    parameters: [...limits],
    responses: { ...responses, ...BadRequest }
  }
};

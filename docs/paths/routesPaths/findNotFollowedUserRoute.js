const { responses, BadRequest } = require("../../common/responses");
const { limits } = require("../../common/parameters");

module.exports = {
  get: {
    tags: ["Routes"],
    description: "Get routes from users you don't follow",
    operationId: "findNotFollowedUserRoute",
    security: [{ bearerAuth: [] }],
    parameters: [...limits],
    responses: { ...responses, ...BadRequest }
  }
};

const { responses } = require("../../common/responses");
const { limits } = require("../../common/parameters");

module.exports = {
  get: {
    tags: ["Comment"],
    description: "Get All comments",
    operationId: "getAllComments",
    deprecated: true,
    security: [{ bearerAuth: [] }],
    parameters: limits,
    responses: { ...responses }
  }
};

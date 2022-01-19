const { responses } = require("../../common/responses");
const { limits } = require("../../common/parameters");

module.exports = {
  get: {
    tags: ["Routes"],
    description: "Get All Routes",
    operationId: "allRoutes",
    deprecated: true,
    security: [{ bearerAuth: [] }],
    parameters: limits,
    responses: { ...responses }
  }
};

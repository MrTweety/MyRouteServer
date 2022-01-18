const { responses } = require("../common/responses");

module.exports = {
  get: {
    tags: ["Users"],
    description: "Get current user",
    operationId: "getCurrentUser",
    security: [{ bearerAuth: [] }],

    parameters: [],
    responses: { ...responses }
  }
};

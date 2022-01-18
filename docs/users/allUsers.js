const { responses } = require("../common/responses");

module.exports = {
  get: {
    tags: ["Users"],
    description: "Get All Users",
    operationId: "getAllUsers",
    security: [{ bearerAuth: [] }],
    parameters: [],
    responses: { ...responses }
  }
};

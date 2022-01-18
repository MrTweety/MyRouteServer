const { responses, BadRequest } = require("../common/responses");

module.exports = {
  delete: {
    tags: ["Users"],
    description: "Delete current user",
    operationId: "deleteCurrentUser",
    security: [{ bearerAuth: [] }],
    parameters: [],
    responses: { ...responses, ...BadRequest }
  }
};

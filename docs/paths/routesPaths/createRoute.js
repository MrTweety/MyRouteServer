const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  post: {
    tags: ["Routes"],
    description: "Create route",
    operationId: "createRoute",
    security: [{ bearerAuth: [] }],
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/Routes" }
        }
      }
    },
    responses: { ...responses, ...BadRequest }
  }
};

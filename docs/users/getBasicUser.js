const { responses, BadRequest } = require("../common/responses");

module.exports = {
  get: {
    tags: ["Users"],
    description: "Get basic user",
    operationId: "getBasicUser",
    security: [{ bearerAuth: [] }],

    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/user_id" },
        required: true,
        description: "A single user id"
      }
    ],
    responses: { ...responses, ...BadRequest }
  }
};

const { responses, BadRequest } = require("../common/responses");

module.exports = {
  post: {
    tags: ["Users"],
    description: "Follow",
    operationId: "followUserById",
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

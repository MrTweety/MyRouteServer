const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  post: {
    tags: ["Users"],
    description: "Unfollow",
    operationId: "unfollowUserById",
    security: [{ bearerAuth: [] }],

    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/user_id" },
        example: "5df53de687f8f312ba79a8d1",
        required: true,
        description: "A single user id"
      }
    ],
    responses: { ...responses, ...BadRequest }
  }
};

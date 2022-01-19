const { responses } = require("../../common/responses");

module.exports = {
  get: {
    tags: ["Users"],
    description: "Get All Users",
    operationId: "getAllUsers",
    deprecated: true,
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "offset",
        in: "query",
        schema: {
          type: "number",
          example: "0"
        }
      },
      {
        name: "limit",
        in: "query",
        schema: {
          type: "number",
          example: "2"
        }
      }
    ],
    responses: { ...responses }
  }
};

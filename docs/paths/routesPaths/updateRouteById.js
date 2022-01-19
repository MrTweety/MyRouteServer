const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  put: {
    tags: ["Routes"],
    description: "Update route by Id",
    operationId: "updateRouteById",
    deprecated: true,
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/route_id" },
        example: "61e878cd92a29442f4466496",
        required: true,
        description: "A single route id"
      }
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                example: "newName",
                required: true
              }
            }
          }
        }
      }
    },
    responses: { ...responses, ...BadRequest }
  }
};

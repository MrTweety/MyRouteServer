const { responses, BadRequest } = require("../../common/responses");

module.exports = {
  delete: {
    tags: ["Routes"],
    description: "Delete route by Id",
    operationId: "deleteRouteById",
    deprecated: true,
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { $ref: "#/components/schemas/route_id" },
        example: "61e8332fdcbe0b1664e7e59c",
        required: true,
        description: "A single route id"
      }
    ],
    responses: { ...responses, ...BadRequest }
  }
};

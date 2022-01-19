const { Coords, ArrayOfCoords } = require("./Coords");
const { Routes } = require("./Routes");

module.exports = {
  user_id: {
    type: "string",
    description: "user Id",
    example: "61e600f259568e0cf003ccba"
  },
  route_id: {
    type: "string",
    description: "route Id",
    example: "5dfd01efd2324d004b34a90b"
  },
  Coords,
  ArrayOfCoords,
  Routes,
  User: {
    type: "object",
    properties: {
      id: { $ref: "#/components/schemas/user_id" },
      title: {
        type: "string",
        description: "Todo's title",
        example: "Coding in JavaScript"
      },
      completed: {
        type: "boolean",
        description: "The status of the todo",
        example: false
      }
    }
  }
};

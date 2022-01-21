const { Coords, ArrayOfCoords } = require("./Coords");
const { Routes } = require("./Routes");
const { Comment } = require("./Comment");

module.exports = {
  user_id: {
    type: "string",
    description: "User Id",
    example: "61e600f259568e0cf003ccba"
  },
  route_id: {
    type: "string",
    description: "Route Id",
    example: "5dfd01efd2324d004b34a90b"
  },
  comment_id: {
    type: "string",
    description: "Comment Id",
    example: null
  },
  Coords,
  ArrayOfCoords,
  Routes,
  Comment,
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

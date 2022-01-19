const Routes = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "Name",
      required: true
    },
    startDate: {
      oneOf: [
        {
          type: "string",
          example: new Date().toISOString(),
          format: "date-time",
          required: true
        },
        {
          type: "number",
          required: true,
          example: Date.now()
        }
      ]
    },
    endDate: {
      oneOf: [
        {
          type: "string",
          example: new Date().toISOString(),
          format: "date-time",
          required: true
        },
        {
          type: "number",
          required: true,
          example: Date.now()
        }
      ]
    },
    distance: {
      type: "number",
      example: "12",
      required: true
    },
    timerDuration: {
      type: "number",
      example: ""
    },
    routeAuthor: { $ref: "#/components/schemas/user_id" },
    coords: { $ref: "#/components/schemas/ArrayOfCoords" }
  }
};

module.exports = { Routes };

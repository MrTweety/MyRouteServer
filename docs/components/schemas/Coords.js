const Coords = {
  type: "object",
  properties: {
    latitude: {
      type: "number",
      required: true,
      example: 51.9665
    },
    longitude: {
      type: "number",
      required: true,
      example: 7.6015383
    },
    altitude: {
      type: "number",
      required: false,
      example: 61
    },
    heading: {
      type: "number",
      required: false,
      example: 90
    },
    timestamp: {
      oneOf: [
        {
          type: "number",
          required: false,
          example: Date.now()
        },
        {
          type: "string",
          example: new Date().toISOString(),
          format: "date-time",
          required: false
        }
      ]
    },
    image: {
      type: "string",
      format: "byte",
      description: "base64-encoded characters",
      required: false,
      example: ""
    }
  }
};

const ArrayOfCoords = {
  required: true,
  type: "array",
  items: { $ref: "#/components/schemas/Coords" },
  example: [
    {
      latitude: 7.6015383,
      longitude: 51.9665,
      altitude: 61,
      heading: 90,
      timestamp: Date.now(), // number
      image: ""
    },
    {
      latitude: 51.9665318,
      longitude: 7.6015458,
      altitude: 59.5,
      heading: 0.006008,
      timestamp: new Date().toISOString(), //string
      image: ""
    }
  ]
};

module.exports = { Coords, ArrayOfCoords };

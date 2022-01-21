const Comment = {
  type: "object",
  properties: {
    author: { $ref: "#/components/schemas/user_id" },
    parens: { $ref: "#/components/schemas/comment_id" },
    route: { $ref: "#/components/schemas/route_id" },
    date: {
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
    dataUpdate: {
      oneOf: [
        {
          type: "string",
          example: null,
          format: "date-time"
        },
        {
          type: "number",
          example: null
        }
      ]
    },
    comment: {
      type: "string",
      example: "Comment text",
      required: true
    },
    previousVersions: {
      type: "array",
      items: {
        type: "string",
        example: "Previous comment text"
      },
      example: []
    }
  }
};

module.exports = { Comment };

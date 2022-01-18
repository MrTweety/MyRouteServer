module.exports = {
  // security: [
  //   {
  //     "bearerAuth": [],
  //   },
  // ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    schemas: {
      user_id: {
        type: "string",
        description: "user Id",
        example: "tyVgf"
      },
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "User identification number",
            example: "ytyVgh"
          },
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
      // TodoInput: {
      //   type: "object",
      //   properties: {
      //     title: {
      //       type: "string",
      //       description: "Todo's title",
      //       example: "Coding in JavaScript",
      //     },
      //     completed: {
      //       type: "boolean",
      //       description: "The status of the todo",
      //       example: false,
      //     },
      //   },
      // },
      // Error: {
      //   type: "object",
      //   properties: {
      //     message: {
      //       type: "string",
      //     },
      //     internal_code: {
      //       type: "string",
      //     },
      //   },
      // },
    }
  }
};

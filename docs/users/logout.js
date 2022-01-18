module.exports = {
  post: {
    tags: ["Auth"],
    // tags: ["Sign Out"],
    description: "Sign Out MyRoute",
    operationId: "userLogOut",
    security: [{ bearerAuth: [] }],
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              token: {
                type: "string",
                example: "Aa",
                required: true
              }
            }
          }
        }
      }
    },
    responses: {
      "200": { description: "Sign Out successful" },
      // "401": { description: "Invalid Token" },
      "500": { description: "Sign Out fail - Internal Error" }
    }
  }
};

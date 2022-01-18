module.exports = {
  post: {
    tags: ["Auth"],
    // tags: ["Sign In"],
    description: "Login to MyRoute",
    operationId: "getUserByLoginAndPassword",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              login: {
                type: "string",
                example: "Login",
                required: true
              },
              password: {
                type: "string",
                example: "Password",
                required: true
              }
            }
          }
        }
      }
    },
    responses: {
      "200": { description: "Login successful" },
      "401": { description: "Login fail" },
      "500": { description: "Login fail - Internal Error" }
    }
  }
};

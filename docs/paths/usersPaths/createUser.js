module.exports = {
  post: {
    tags: ["Auth"],
    // tags: ["Sign Up"],
    description: "Sign Up to MyRoute",
    operationId: "createUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                example: "Name",
                required: true
              },
              login: {
                type: "string",
                example: "Login",
                required: true
              },
              mail: {
                type: "string",
                example: "Mail",
                format: "email",
                required: true
              },
              password: {
                type: "string",
                example: "Password",
                format: "password",
                required: true
              }
            }
          }
        }
      }
    },
    responses: {
      "201": { description: "Sign Up successful" },
      "400": { description: "User already exists" },
      "500": { description: "Sign Up - Internal Error" }
    }
  }
};

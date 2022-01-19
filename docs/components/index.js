const schemas = require("./schemas");

module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
    responses: {
      Success: { description: "Success" },
      BadRequest: { description: "Bad request" },
      Unauthorized: { description: "Unauthorized" },
      NotFound: { description: "Not found" },
      InternalError: { description: "Internal Error" }
    },
    schemas
  }
};

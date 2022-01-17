const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const router = express.Router();

const swaggerSpec = swaggerJsdoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "MyRoute API",
      version: "1.0.0",
      description: "MyRoute API"
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ],

  // swagger: "2.0",
  apis: ["./routes/*.js"]
});
// console.log("MG-log ~ file: swagger.js ~ line 34 ~ swaggerSpec", swaggerSpec);

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerSpec), () => {
  return;
});

module.exports = router;

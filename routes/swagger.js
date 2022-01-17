const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");

var options = {};
router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(null, options), () => {
  return;
});

module.exports = router;

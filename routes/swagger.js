const express = require("express");
const swaggerUi = require("swagger-ui-express");
const docs = require("../docs");
const router = express.Router();

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(docs), () => {
  return;
});

module.exports = router;

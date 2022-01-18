const express = require("express");
const swaggerUi = require("swagger-ui-express");
const docs = require("../docs");
console.log("MG-log ~ file: swagger.js ~ line 4 ~ docs", docs);

const router = express.Router();

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(docs), () => {
  return;
});

module.exports = router;

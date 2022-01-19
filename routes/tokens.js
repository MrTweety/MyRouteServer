const express = require("express");
const router = express.Router();
const { onlyDevAccess } = require("../middleware/utils");

const getAllTokens = require("../controllers/tokens/getAllTokens");
const deleteAllTokens = require("../controllers/tokens/deleteAllTokens");

router
  .get("/", onlyDevAccess, getAllTokens)
  .delete("/deleteAll", onlyDevAccess, deleteAllTokens);

module.exports = router;

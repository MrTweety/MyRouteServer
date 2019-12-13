const express = require("express");
const router = express.Router();

const getAllTokens = require("../controllers/tokens/getAllTokens");
const deleteAllTokens = require("../controllers/tokens/deleteAllTokens");

router.get("/", getAllTokens).delete("/deleteAll", deleteAllTokens);

module.exports = router;

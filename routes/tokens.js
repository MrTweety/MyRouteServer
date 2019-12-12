const express = require("express");
const router = express.Router();

const getAllTokens = require("../controllers/tokens/getAllTokens");

router.get("/", getAllTokens);

module.exports = router;

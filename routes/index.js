const express = require("express");
const path = require("path");
const router = express.Router();

const PageController = require("../controllers/PageController");
const AplicationsController = require("../controllers/AplicationsController");

router.get("/", PageController.home);

router.post("/applications", AplicationsController.store);

module.exports = router;

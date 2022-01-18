const express = require("express");
const router = express.Router();

router.get("/version", (req, res) => {
  const info = {
    version: process.env.npm_package_version || "1.0.0",
    APP_ENV: process.env.APP_ENV,
    NODE_ENV: process.env.NODE_ENV
  };
  return res.status(200).json(info);
});

module.exports = router;

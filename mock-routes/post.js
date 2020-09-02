const express = require("express");
const Post = require("../models/post");
const router = express.Router();

router.get("", (req, res, next) => {
  res.status(200).json({
    message: "Working"
  });
});

module.exports = router;

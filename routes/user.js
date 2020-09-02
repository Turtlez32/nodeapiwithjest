const express = require("express");
const router = express.Router();

router.get("/check", (req, res, next) => {
  const id = req.body.id;

  if (!id) {
    res.status(500).json({
      message: "User Id not provided"
    });
  }

  res.status(200).json({
    message: "User check performed",
    type: "user"
  });
});

router.get("/admin", (req, res, next) => {
  const id = req.body.id;

  if (!id) {
    res.status(500).json({
      message: "User Id not provided"
    });
  }

  res.status(200).json({
    message: "Admin check performed",
    type: "admin"
  });
});

module.exports = router;

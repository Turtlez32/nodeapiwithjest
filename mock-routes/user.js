const express = require("express");
const router = express.Router();

router.get("/check", (req, res, next) => {
  const user = req.body.user;

  if (user.acctype !== "USER") {
    res.status(500).json({
      message: "User not logged in"
    });
  }

  res.status(200).json({
    message: "User logged in with account type user"
  });
});

router.get("/admin", (req, res, next) => {
  const user = req.body.user;

  if (user.acctype !== "ADMIN") {
    res.status(500).json({
      message: "User is not an admin"
    });
  }

  res.status(200).json({
    message: "User is an admin"
  });
});

module.exports = router;

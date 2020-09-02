const express = require("express");
const router = express.Router();

router.post("/login", (req, res, next) => {
  const user = req.body.user;

  /* Failed login attempt */
  if (user.username === "zyther64") {
    res
      .status(200)
      .json({ message: "Unable to login due to incorrect details" });
  }

  /* Successful login attempt */
  res.status(200).json({
    message: "User Successfully Logged In",
    user: user
  });
});

router.post("/signup", (req, res, next) => {
  const user = req.body;

  if (!user.username) {
    res.status(500).json({
      message: "Unable to create new user"
    });
  }

  res.status(200).json({
    messsage: "User created successfully",
    user: user
  });
});

module.exports = router;

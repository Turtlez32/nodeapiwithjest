const express = require("express");
const router = express.Router();

router.post("/login", (req, res, next) => {
  const user = req.body;

  /* Username not provided */
  if (!user.username) {
    res.status(500).json({ message: "Unable to login - 01" });
  }

  /* Password not provided */
  if (!user.password) {
    res.status(500).json({ message: "Unable to login - 02" });
  }

  /* Failed login attempt */
  if (user.username === "X_X_X") {
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

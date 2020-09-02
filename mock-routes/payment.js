const express = require("express");
const Payment = require("../models/payment");
const router = express.Router();

router.get("", (req, res, next) => {
  const payment = Payment({
    id: "pioaihjw",
    user: "Zyther44",
    total: 300
  });

  res.status(200).json({
    message: "Payment Found",
    data: payment
  });
});

router.post("/:id", (req, res, next) => {
  const payment = req.body.payment;

  if (!payment.id) {
    res.status(500).json({
      message: "Payment data not correct",
      data: payment
    });
  }

  res.status(200).json({
    message: "Payment made successfully",
    data: payment
  });
});

module.exports = router;

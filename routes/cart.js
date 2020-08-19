const express = require("express");
const Cart = require("../models/cart");
const Item = require("../models/item");
const router = express.Router();

router.get("", (req, res, next) => {
  const cart = Cart({
    user: "Zyther44",
    items: [
      {
        id: "asda",
        name: "stuff",
        description: "stuff and junk",
        price: 100
      },
      {
        id: "asda",
        name: "stuff",
        description: "stuff and junk",
        price: 100
      },
      {
        id: "asda",
        name: "stuff",
        description: "stuff and junk",
        price: 100
      }
    ]
  });

  res.status(200).json({
    message: "Cart is full",
    cart: cart
  });
});

router.post("/add", (req, res, next) => {
  const item = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  };

  res.status(200).json({
    message: "item added to cart",
    data: item
  });
});

module.exports = router;

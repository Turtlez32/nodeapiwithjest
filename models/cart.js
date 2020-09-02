const mongoose = require("mongoose");
const Item = require("./item");

const cartSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  items: {
    type: [Item.schema],
    required: true
  }
});

module.exports = mongoose.model("Cart", cartSchema);

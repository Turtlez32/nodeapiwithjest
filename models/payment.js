const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Payment", paymentSchema);

const mongoose = require("mongoose");
const Image = require("../models/image").schema;

const portfolioSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  albumid: {
    type: String,
    required: true
  },
  photos: {
    type: [Image],
    required: true
  }
});

module.exports = mongoose.model("Portfolio", portfolioSchema);

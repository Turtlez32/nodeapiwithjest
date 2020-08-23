const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  id: { type: String, required: true },
  albumid: { type: String, required: true },
  imagepath: { type: String, required: true }
});

module.exports = mongoose.model("Image", imageSchema);

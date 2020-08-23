const mongoose = require("mongoose");

const albumSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], require: true }
});

module.exports = mongoose.model("Album", albumSchema);

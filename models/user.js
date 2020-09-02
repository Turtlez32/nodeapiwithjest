const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  acctype: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: false
  },
  firstname: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("User", userSchema);

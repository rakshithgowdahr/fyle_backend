const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  // _id: mongoose.Schema.ObjectId,
  ifsc: String,
  bank_id: Number,
  branch: String,
  address: String,
  city: String,
  district: String,
  state: String,
  bank_name: String
});

module.exports = Branch = mongoose.model("Branch", branchSchema, "branches");

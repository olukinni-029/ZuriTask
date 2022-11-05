const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
  slackUsername: {
    type: String,
  },
  operation_type: {
    type: String,
    enum: ["addition", "subtraction", "multiplication"],
  },
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
  result: {
    type: Number,
  },
});

module.exports = mongoose.model("Sample", sampleSchema);

// Declare dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema representing user info to save to db
const UserSchema = new Schema({
  userId: {
    type: Schema,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  currentBalance: {
    type: Number,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

// Export model
const User = mongoose.model("user", UserSchema);

module.exports = User;

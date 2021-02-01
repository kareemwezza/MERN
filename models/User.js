const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  googleId: String,
  facebookId: String,
});

// create instance model to make a collection of data with schema (name of coll, schema)
mongoose.model("users", UserSchema);

import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment"; // mongoose-auto-increment this library create unique id

// how our document look like
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: Number,
  website: String,
});

autoIncrement.initialize(mongoose.connection); // autoIncrement initialise here
// userSchema.plugin(autoIncrement.plugin, "user"); // autoIncrement used for collection name user
// we need to turn it into a model
const postUser = mongoose.model("user", userSchema); // here user is database collection name

export default postUser;

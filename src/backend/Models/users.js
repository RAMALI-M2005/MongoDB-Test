import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Best practice to provide a default value for Date
  },
});

const User = mongoose.model("User", UserSchema);
export default User; // Use export default for ES6 modules

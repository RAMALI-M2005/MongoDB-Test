import mongoose from "mongoose";

// User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter your username"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Enter a password that has a minimum of 8 characters or digits."],
    minlength: [8, "Password must be at least 8 characters long"],
  },
  profileIMG: String, // Store profile image URL
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

// Post Schema
const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  imgURL: {
    type: String,
    required: [true, "Please select a photo."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
  },
});

const Post = mongoose.model("Post", PostSchema);

export { User, Post }; // Use named exports for better flexibility

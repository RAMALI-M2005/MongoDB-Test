import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./Routes/users.route.js";
import PostRoute from "./Routes/posts.route.js";

const app = express();
const port = process.env.PORT || 3000;
const uri =
  "mongodb+srv://nexabyte404:0HGNOZaByrFDV4hi@cluster0.o82n7.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", userRoute);
app.use("/api/posts",PostRoute);

// Connect to MongoDB (without deprecated options)
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("MongoDB connection error:", error));

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello from Express and MongoDB!");
});

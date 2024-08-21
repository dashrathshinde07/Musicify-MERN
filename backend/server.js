import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoute.js";

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;

// Establish database and Cloudinary connections
connectDB();
connectCloudinary();

// Middleware setup
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Route initialization
app.use("/api/song", songRouter); // Routes for song operations
app.use("/api/album", albumRouter); // Routes for album operations

// Root endpoint to verify API status
app.get("/", (req, res) => res.send("API Working"));

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server started on PORT: ${port}`));

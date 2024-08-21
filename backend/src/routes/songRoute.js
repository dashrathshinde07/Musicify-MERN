import { addSong, listSong, removeSong } from "../controllers/songController.js";
import express from "express";
import upload from "../middleware/multer.js";

// Creating a new router for song-related routes
const songRouter = express.Router();

// Route to add a new song with image and audio file uploads
songRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 }, // Uploading a single image file
    { name: "audio", maxCount: 1 }, // Uploading a single audio file
  ]),
  addSong
);

// Route to list all songs
songRouter.get("/list", listSong);

// Route to remove a song by ID
songRouter.post("/remove", removeSong);

export default songRouter;

import express from "express";
import upload from "../middleware/multer.js";
import {
  addAlbum,
  listAlbum,
  removeAlbum,
} from "../controllers/albumController.js";

const albumRouter = express.Router(); // Creating a new router for album routes

// Route to add a new album with image upload
albumRouter.post("/add", upload.single("image"), addAlbum);

// Route to list all albums
albumRouter.get("/list", listAlbum);

// Route to remove an album by ID
albumRouter.post("/remove", removeAlbum);

export default albumRouter; // Exporting the album router

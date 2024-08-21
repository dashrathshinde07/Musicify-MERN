// Importing mongoose, a MongoDB ORM for Node.js
import mongoose from "mongoose";

// Defining a schema for the "song" collection in MongoDB
const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

// Creating a mongoose model for the "song" collection, or reusing an existing one
const songModel = mongoose.models.song || mongoose.model("song", songSchema);

// Exporting the song model as the default export
export default songModel;

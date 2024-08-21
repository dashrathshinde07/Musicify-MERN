// Importing mongoose, a MongoDB ORM for Node.js
import mongoose from "mongoose";

// Defining a schema for the "album" collection in MongoDB
const albumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  bgColour: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Creating a mongoose model for the "album" collection, or reusing an existing one
const albumModel =
  mongoose.models.album || mongoose.model("album", albumSchema);

// Exporting the album model as the default export
export default albumModel;

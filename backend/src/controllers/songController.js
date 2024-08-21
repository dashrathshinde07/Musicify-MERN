import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

// Function to add a new song
const addSong = async (req, res) => {
  try {
    // Extracting song details from request
    const { name, desc, album } = req.body;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    // Uploading files to Cloudinary
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    // Calculating song duration
    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    // Preparing song data for database
    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };

    // Creating and saving the song document
    const song = new songModel(songData);
    await song.save();

    // Sending success response
    res.json({
      success: true,
      message: "Song Added",
    });
  } catch (error) {
    console.log(error);
    // Sending failure response
    res.json({
      success: false,
    });
  }
};

// Function to list all songs
const listSong = async (req, res) => {
  try {
    const allSongs = await songModel.find({});
    // Sending response with all songs
    res.json({
      success: true,
      songs: allSongs,
    });
  } catch (error) {
    console.log(error);
    // Sending failure response
    res.json({
      success: false,
    });
  }
};

// Function to remove a song by ID
const removeSong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.body.id);
    // Sending success response
    res.json({
      success: true,
      message: "Song Removed",
    });
  } catch (error) {
    console.log(error);
    // Sending failure response
    res.json({
      success: false,
    });
  }
};

export { addSong, listSong, removeSong };

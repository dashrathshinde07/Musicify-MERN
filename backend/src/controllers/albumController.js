import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

// Function to add a new album
const addAlbum = async (req, res) => {
  try {
    // Extracting album details from request
    const { name, desc, bgColour } = req.body;
    const imageFile = req.file;

    // Uploading album cover to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    // Preparing album data for database
    const albumData = {
      name,
      desc,
      bgColour,
      image: imageUpload.secure_url,
    };

    // Creating and saving the album document
    const album = new albumModel(albumData);
    await album.save();

    // Sending success response
    res.json({
      success: true,
      message: "Album added",
    });
  } catch (error) {
    console.log(error);
    // Sending failure response
    res.json({
      success: false,
    });
  }
};

// Function to list all albums
const listAlbum = async (req, res) => {
  try {
    const allAlbums = await albumModel.find({});
    // Sending response with all albums
    res.json({
      success: true,
      albums: allAlbums,
    });
  } catch (error) {
    console.log(error);
    // Sending failure response
    res.json({
      success: false,
    });
  }
};

// Function to remove an album by ID
const removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.body.id);
    // Sending success response
    res.json({
      success: true,
      message: "Album removed",
    });
  } catch (error) {
    console.log(error);
    // Sending failure response
    res.json({
      success: false,
    });
  }
};

export { addAlbum, listAlbum, removeAlbum };

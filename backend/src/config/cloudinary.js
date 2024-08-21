import { v2 as cloudinary } from "cloudinary";

// Function to configure and connect to Cloudinary
const connectCloudinary = async () => {
  await cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, // Cloudinary cloud name from environment variables
    api_key: process.env.CLOUDINARY_API_KEY, // Cloudinary API key from environment variables
    api_secret: process.env.CLOUDINARY_SECRET_KEY, // Cloudinary secret key from environment variables
  });
};

export default connectCloudinary; // Exporting the Cloudinary connection function

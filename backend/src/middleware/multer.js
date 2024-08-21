// Importing multer, a middleware for handling multipart/form-data requests
import multer from "multer";

// Configuring multer to store files on disk
const storage = multer.diskStorage({
  // Function to determine the filename for the uploaded file
  filename: function (req, file, callback) {
    // Using the original filename of the uploaded file
    callback(null, file.originalname);
  },
});

// Creating a multer instance with the configured storage
const upload = multer({ storage });

// Exporting the multer instance as the default export
export default upload;

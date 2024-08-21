import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
  // Event listener for successful connection
  mongoose.connection.on("connected", () => {
    console.log("Connection established"); // Log message on successful connection
  });

  // Connecting to the MongoDB using the URI from environment variables
  await mongoose.connect(`${process.env.MONGO_URI}/Musicify-MERN-Database`);
};

export default connectDB; // Exporting the database connection function

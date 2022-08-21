const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.log(error);
    console.log("Failed to connect MongoDB.");
  }
};

module.exports = connectToDB;

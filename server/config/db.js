import mongoose from "mongoose";
import dotenv from "dotenv";
const dbconnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB CONNECTED ✅");
  } catch (error) {
    console.log(error);
  }
};

export default dbconnect;

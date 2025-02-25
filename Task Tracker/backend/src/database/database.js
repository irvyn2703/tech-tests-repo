import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

// eslint-disable-next-line
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(`Error: `, error);
    // eslint-disable-next-line
    process.exit(1);
  }
};

export default connectDB;

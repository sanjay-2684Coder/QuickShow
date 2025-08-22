// testMongo.js
import mongoose from "mongoose";
import 'dotenv/config';

const testConnection = async () => {
  try {
    console.log("Trying to connect with:", process.env.MONGODB_URL);

    await mongoose.connect(`${process.env.MONGODB_URL}/quickshow`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Successfully!");
    process.exit(0);
  } catch (error) {
    console.error(" MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

testConnection();

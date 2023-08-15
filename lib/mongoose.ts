import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URL) {
    console.log("MONGO_URL not found");
    return;
  }
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL);

    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const queryString =`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/Cluster0?retryWrites=true&w=majority`;
    await mongoose.connect(queryString);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
};
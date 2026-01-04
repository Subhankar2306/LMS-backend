import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://subhankardhal637_db_user:LMS-DostMaster0@cluster0.tsugryx.mongodb.net/L-M-S"
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    });
};

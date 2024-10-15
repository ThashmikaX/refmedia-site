import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

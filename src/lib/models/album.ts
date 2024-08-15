import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  albumTitle: {
    type: String,
    required: [true, "Album title is required"],
  },
  eventDate: {
    type: String,
    required: [true, "Event date is required"],
  },
  albumDescription: {
    type: String,
    required: [true, "Album description is required"],
  },
  facebookAlbumLink: {
    type: String,
    required: [true, "Facebook album link is required"],
  },
  imageLinks: {
    type: [String],
    required: [true, "At least 5 image link is required"],
  },
  photographers: {
    type: [String],
    required: [true, "At least one photographer name is required"],
  },
});

export default mongoose.models.Album || mongoose.model("Album", albumSchema);

import mongoose, { Schema, model } from "mongoose";

const opts = { toJSON: { virtuals: true } };
const gamesSchema = new Schema(
  {
    thumbnail: {
      type: [String],
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    assessment: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    manufacturer: {
      type: String,
      require: true,
    },
    model: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    line: {
      type: String,
      require: true,
    },
    comments: {
      type: Array,
      require: true,
    },
    likes: {
      type: Array,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  opts
);

gamesSchema.virtual("thumbnail_urls").get(function () {
  if (this.thumbnail && this.thumbnail.length > 0) {
    return this.thumbnail.map(
      (filename) => `http://localhost:3000/files/${filename}`
    );
  }
  return [];
});

gamesSchema.index({ title: "text", category: "text" });

const games = model("Games", gamesSchema);

export default games;

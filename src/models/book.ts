import mongoose from "mongoose";
const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: { type: String },
    author: { type: String },
    description: { type: String }
  },
  { timestamps: true }
);

export const BookModel = mongoose.model("Book", BookSchema);

export default BookModel;
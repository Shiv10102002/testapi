import mongoose, { Schema } from "mongoose";


const imageSchema = new Schema(
  {
    imgurlList: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const Images = mongoose.model("Image",imageSchema);
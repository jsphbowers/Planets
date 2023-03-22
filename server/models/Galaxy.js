import mongoose, { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxLength: 40 },
  stars: { type: Number, required: true, max: 25 }
},
  { timestamps: true, toJSON: { virtuals: true } })

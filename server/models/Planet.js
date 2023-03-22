import mongoose, { Schema } from "mongoose";

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  biome: { type: String, required: true, maxLength: 30 },
  atmosphere: { type: Boolean, required: true, default: false },
  galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
})
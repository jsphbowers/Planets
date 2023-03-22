import { Schema } from "mongoose";


export const PlanetColonySchema = new Schema({
  planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
  colonyId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
})
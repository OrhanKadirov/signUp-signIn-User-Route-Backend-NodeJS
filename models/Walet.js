import mongoose from "mongoose";

const waletSchema = new mongoose.Schema({
  mnemonic: { type: [String] },
  xpub: { type: String },
});

export const Walet = mongoose.model("Walet", waletSchema, "walets");

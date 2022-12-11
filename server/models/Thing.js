const { Schema, model } = require("mongoose");

// Indiquant le type ainsi leur caractères (obligatoire ou non, dand notre cas obligatoire)
const memberSchema = new Schema({
  membre: { type: String, required: true, index: { unique: false } },
  sexe: { type: String, required: true, index: { unique: false } },
  age: {
    type: Number,
    min: 18,
    max: 100,
    required: true,
    index: { unique: false },
  },
  date: { type: Date, required: true, index: { unique: false } },
});

module.exports = model("Thing", memberSchema);

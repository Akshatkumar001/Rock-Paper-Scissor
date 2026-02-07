const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    draws: { type: Number, default: 0 },
    points: { type: Number, default: 0 }
});

module.exports = mongoose.model("Player", playerSchema);

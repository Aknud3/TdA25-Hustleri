const mongoose = require("mongoose");

const BoardStateSchema = [[String]];

const GameSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  name: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["beginner", "easy", "medium", "hard", "extreme"],
    required: true,
  },
  gameState: {
    type: String,
    enum: ["opening", "midgame", "endgame", "unknown"],
    default: "unknown",
  },
  board: {
    type: BoardStateSchema,
    default: () => Array.from({ length: 15 }, () => Array(15).fill("")),
    validate: {
      validator: function (board) {
        return (
          Array.isArray(board) &&
          board.length === 15 &&
          board.every(row => Array.isArray(row) && row.length === 15)
        );
      },
      message: "Board must be a 15x15 grid of strings."
    },
  },
});

module.exports = mongoose.model("game", GameSchema);

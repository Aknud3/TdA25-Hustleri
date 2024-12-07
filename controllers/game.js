const Game = require("../models/game");
const { v4: uuidv4 } = require("uuid");

exports.createGame = async (req, res) => {
  try {
    const { name, difficulty, board } = req.body;
    const game = new Game({
      uuid: uuidv4(),
      name,
      difficulty,
      board,
    });
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGameByUUID = async (req, res) => {
  try {
    const { uuid } = req.params;
    const game = await Game.findOne({ uuid });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, difficulty, board } = req.body;
    const game = await Game.findOneAndUpdate(
      { uuid },
      { name, difficulty, board, updatedAt: Date.now() },
      { new: true }
    );
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const { uuid } = req.params;
    const game = await Game.findOneAndDelete({ uuid });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

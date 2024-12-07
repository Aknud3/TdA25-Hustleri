const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game");

router.post("/games", gameController.createGame);
router.get("/games", gameController.getAllGames);
router.get("/games/:uuid", gameController.getGameByUUID);
router.put("/games/:uuid", gameController.updateGame);
router.delete("/games/:uuid", gameController.deleteGame);

module.exports = router;

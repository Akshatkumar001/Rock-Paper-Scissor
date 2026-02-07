const express = require("express");
const { playGame, getAllPlayers } = require("../controllers/gameControllers");

const router = express.Router();

router.post("/play", playGame);
router.get("/players", getAllPlayers);

module.exports = router;

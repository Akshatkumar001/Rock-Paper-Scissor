const Player = require("../models/Player");

const choices = ["rock", "paper", "scissor"];

const decideWinner = (player, computer) => {
    if (player === computer) return "draw";
    if (
        (player === "rock" && computer === "scissor") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissor" && computer === "paper")
    ) return "win";
    return "lose";
};

exports.playGame = async (req, res) => {
    const { name, choice } = req.body;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = decideWinner(choice, computerChoice);

    let player = await Player.findOne({ name });
    if (!player) player = new Player({ name });

    if (result === "win") {
        player.wins += 1;
        player.points += 3;
    } else if (result === "lose") {
        player.losses += 1;
    } else {
        player.draws += 1;
        player.points += 1;
    }

    await player.save();

    res.json({
        result,
        computerChoice,
        stats: player
    });
};
exports.getAllPlayers = async (req, res) => {
    const players = await Player.find().sort({ points: -1 });
    res.json(players);
};

const Player = require("../models/Player");

const choices = ["rock", "paper", "scissor"];

// 🎯 SMART AI (Pattern Prediction - DFS style)
const getSmartMove = (history) => {
    if (history.length < 3) {
        return choices[Math.floor(Math.random() * 3)];
    }

    const pattern = history.slice(-2).join(",");

    let count = { rock: 0, paper: 0, scissor: 0 };

    for (let i = 0; i < history.length - 2; i++) {
        const current = history[i] + "," + history[i + 1];

        if (current === pattern) {
            const next = history[i + 2];
            count[next]++;
        }
    }

    let predicted = "rock";
    let max = 0;

    for (let move in count) {
        if (count[move] > max) {
            max = count[move];
            predicted = move;
        }
    }

    // counter move
    if (predicted === "rock") return "paper";
    if (predicted === "paper") return "scissor";
    return "rock";
};

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
    try {
        const { name, choice } = req.body;

        let player = await Player.findOne({ name });
        if (!player) player = new Player({ name });

        // 🔥 AI move
        const computerChoice = getSmartMove(player.history);

        const result = decideWinner(choice, computerChoice);

        // update stats
        if (result === "win") {
            player.wins += 1;
            player.points += 3;
        } else if (result === "lose") {
            player.losses += 1;
        } else {
            player.draws += 1;
            player.points += 1;
        }

        // store history
        player.history.push(choice);
        if (player.history.length > 20) player.history.shift();

        await player.save();

        res.json({
            result,
            computerChoice,
            stats: player
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find().sort({ points: -1 });
        res.json(players);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
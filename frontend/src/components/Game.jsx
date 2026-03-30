import { useState } from "react";
import { playGame } from "../services/api";
import './Game.css';
import paper from '../assets/paper.png';
import rock from '../assets/rock.png';
import scissor from '../assets/scissors.png';

const Game = ({ refreshDashboard }) => {
    const [name, setName] = useState("");
    const [result, setResult] = useState(null);

    const handlePlay = async (choice) => {
        if (!name) return alert("Enter name!");

        const res = await playGame({ name, choice });
        setResult(res.data);

        refreshDashboard(); // 🔥 now works
    };

    return (
        <div id="gameInput">
            <div id="title">
                <h1>🎮 Rock Paper Scissors</h1>
            </div>
            
            <div id="input">
                <input
                placeholder="Enter Player Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            

            <div id="button-container">
                <button className="btn" id="rock" onClick={() => handlePlay("rock")}>
                    <div className="btnW">
                        <h2>ROCK</h2>
                    </div>
                    <div className="btnI">
                        <img src={rock} alt="" />
                    </div>
                    
                </button>

                <button className="btn" id="paper" onClick={() => handlePlay("paper")}>
                    <div className="btnW">
                        <h2>PAPER</h2>
                    </div>
                    <div className="btnI">
                        <img src={paper} alt="" />
                    </div>
                    
                </button>

                <button className="btn" id="scissor" onClick={() => handlePlay("scissor")}>
                    <div className="btnW">
                        <h2>SCISSOR</h2>
                    </div>
                    <div className="btnI">
                        <img src={scissor} alt="" />
                    </div>
                    
                </button>
            </div>

            {result && (
    <div id="result" className={result.result}>

        <div className="result-header">
            <h3>
                {result.result === "win" && "🏆 YOU WIN!"}
                {result.result === "lose" && "💀 YOU LOSE!"}
                {result.result === "draw" && "🤝 DRAW!"}
            </h3>
        </div>

        <div id="result-text">
            <p>Computer chose: <u>{result.computerChoice}</u></p>
        </div>

        <div id="wld">
            <div className="mini-card win">
                <p>Wins</p>
                <span>{result.stats.wins}</span>
            </div>

            <div className="mini-card lose">
                <p>Losses</p>
                <span>{result.stats.losses}</span>
            </div>

            <div className="mini-card draw">
                <p>Draws</p>
                <span>{result.stats.draws}</span>
            </div>
        </div>

        <div id="points">
            ⭐ {result.stats.points} Points
        </div>
    </div>
)}
        </div>
    );
};

export default Game;
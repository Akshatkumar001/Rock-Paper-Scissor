import { useState } from "react";
import { playGame, getAllPlayers} from "../services/api";
import './Game.css';
import paper from '../assets/paper.png';
import rock from '../assets/rock.png';
import scissor from '../assets/scissors.png';



const Game = ({ refreshDashboard }) => {
    const [name, setName] = useState("");
    const [result, setResult] = useState(null);

    const handlePlay = async (choice) => {
    const res = await playGame({ name, choice });
    setResult(res.data);
    refreshDashboard();
};

    return (
        <>
        
        <div id="gameInput">
            <div id="title">
                <h1>Rock Paper Scissors</h1>
            </div>
            
            <div id="input">
                <input
                placeholder="Enter Player Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            

            <div id="button-container">
                <button id="rock" className="btn" onClick={() => handlePlay("rock")}>
                <div className="btnW"> 
                <h2>ROCK</h2>
                </div>
                <div className="btnI"> 
                <img src={rock} alt="" />
                </div>
                </button>

                <button id="paper" className="btn" onClick={() => handlePlay("paper")}>
                <div className="btnW"> 
                    <h2>PAPER</h2>
                </div>
                <div className="btnI"> 
                    <img src={paper} alt="" />
                </div>
                </button>

                <button id="scissor" className="btn" onClick={() => handlePlay("scissor")}>
                <div className="btnW"> 
                <h2>SCISSOR</h2>
                </div>
                <div className="btnI"> 
                <img src={scissor} alt="" />
                </div>
                </button>
            </div>


            {result && (
                <div id="result">
                    <div id="result-text">
                        <h3><u>Result: {result.result.toUpperCase()}</u></h3>
                        <p>Computer chose:<u>{result.computerChoice}</u> </p>
                    </div>
                    
                    <div id="wld">
                        <p><b>Wins:</b> {result.stats.wins}</p>
                        <p><b>Losses:</b> {result.stats.losses}</p>
                        <p><b>Draws: </b> {result.stats.draws}</p>
                    </div>
                    <div id="points">
                        <p>Points: {result.stats.points}</p>
                    </div>
                    
                </div>
            )}
        </div>
        </>
    );
};

export default Game;

import { useEffect, useState } from "react";
import { getAllPlayers } from "../services/api";
import './Dashboard.css';

const Dashboard = ({ refresh }) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetchPlayers();
    }, [refresh]); // 🔥 auto refresh

    const fetchPlayers = async () => {
        const res = await getAllPlayers();
        setPlayers(res.data);
    };

    return (
        <div id="dashboard">
            <h2>🏆 Leaderboard</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Draws</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((p) => (
                        <tr key={p._id}>
                            <td>{p.name}</td>
                            <td>{p.wins}</td>
                            <td>{p.losses}</td>
                            <td>{p.draws}</td>
                            <td>{p.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
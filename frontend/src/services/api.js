import axios from "axios";

export const playGame = (data) =>
    axios.post("http://localhost:5000/api/game/play", data);
export const getAllPlayers = () =>
    axios.get("http://localhost:5000/api/game/players");

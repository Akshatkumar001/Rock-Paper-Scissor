import axios from "axios";

const API = "http://localhost:5000/api/game";

export const playGame = (data) =>
    axios.post(`${API}/play`, data);

export const getAllPlayers = () =>
    axios.get(`${API}/players`);
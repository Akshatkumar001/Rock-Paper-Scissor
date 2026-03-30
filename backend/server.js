const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

// 🔗 DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/rps_game")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/game", require("./routes/gameRoutes"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
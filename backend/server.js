const express = require("express");
const app = express();
const chat = require("./data/data");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/chat", (req, res) => {
  res.json(chat);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

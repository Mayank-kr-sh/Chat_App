const express = require("express");
const chat = require("./data/data");
const connectDB = require("./config/database");
const userRoutes = require("./Routes/userRoutes");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the body of the request and get the data in json format

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/user", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB();

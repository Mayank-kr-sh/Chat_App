const express = require("express");
const chat = require("./data/data");
const connectDB = require("./config/database");
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const chatRoutes = require("./Routes/chatRoutes");

require("dotenv").config();
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); // to parse the body of the request and get the data in json format

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB();

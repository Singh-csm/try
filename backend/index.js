const cors = require("cors");
const express = require("express");
const path = require("path");
const mongoDBConnection = require("./config/db");
const userRouter = require("./routes/user.routes");
const tourRouter = require("./routes/tour.routes");
const UserModel = require("./model/user.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();
// app.use(cors())

app.use(
  cors({
    origin: ["http://localhost:3000", "https://spotty-automatic-lavender.glitch.me/travelious_tour?page=1", "https://comforting-taffy-d07f72.netlify.app"],
  })
);

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to explore wonders!");
// });

app.use("/travelious_user", userRouter);
app.use("/travelious_tour", tourRouter);

//google auth

app.use(express.static(path.join(__dirname, "./build")));

app.listen(PORT, async () => {
  try {
    await mongoDBConnection;
    console.log(`server running at ${PORT}`);
  } catch (error) {
    console.log("error while listen", error);
  }
});






app.get("*", (req, res) => {
  const file = path.join(__dirname, "./build/index.html");
  res.sendFile(file);
});
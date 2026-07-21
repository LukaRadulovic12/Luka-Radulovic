const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const API_KEY = "AIzaSyBL8bvjGif3NpS9VhUUSV3Catc2wY8ceGo";

app.get("/videos", async (req, res) => {
  try {
    const odgovor = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=RS&key=${API_KEY}`
    );

    const podaci = await odgovor.json();

    if (!podaci.items) {
      console.log("API ERROR:", podaci);
      return res.json([]);
    }

    res.json(podaci.items);

  } catch (err) {
    console.log("SERVER ERROR:", err);
    res.status(500).json([]);
  }
});

app.listen(3000, () => {
  console.log("Backend radi na http://localhost:3000");
});
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/shows", async (req, res) => {
  try {
    const response = await axios.get("https://api.tvmaze.com/shows");

    const shows50 = response.data.slice(0, 50);

    res.json(shows50);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => console.log("Server running"));

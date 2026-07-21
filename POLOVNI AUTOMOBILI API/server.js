const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "5da3aec5";

// više search termina da dobijemo 50 filmova
const queries = [
  "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j"
];

app.get("/movies", async (req, res) => {
  try {
    let movies = [];

    for (let q of queries) {
      const response = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: API_KEY,
          s: q,        // search po slovu
          type: "movie"
        }
      });

      if (response.data.Search) {
        movies = movies.concat(response.data.Search);
      }

      if (movies.length >= 50) break;
    }

    movies = movies.slice(0, 50);

    res.json(movies);

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Greška" });
  }
});

app.listen(3000, () => {
  console.log("Server radi na http://localhost:3000");
});
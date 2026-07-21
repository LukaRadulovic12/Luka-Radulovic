const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const APP_ID = "6887a802";
const APP_KEY = "uhBsq40gM4xpPvt6gFqIZbUYcLzdbalyIosWQDAz";

app.get("/api/recepti", async (req, res) => {
  try {
    const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
      params: {
        type: "public",
        q: "chicken",
        app_id: APP_ID,
        app_key: APP_KEY,
        // možeš da povećaš broj kroz pagination
      },
    });

    // Edamam vraća "hits"
    const recipes = response.data.hits.map((h) => h.recipe);

    res.json(recipes);
  } catch (err) {
    console.error(err.response?.data);
    console.error(err.response?.status);
    console.error(err.message);

    res.status(500).json(err.response?.data || { error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

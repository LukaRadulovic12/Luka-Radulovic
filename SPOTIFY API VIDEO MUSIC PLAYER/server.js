const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5500;

const CLIENT_ID = "TVOJ_CLIENT_ID";
const CLIENT_SECRET = "TVOJ_CLIENT_SECRET";

app.use(express.static("public")); // 👈 KLJUČNO

async function getAccessToken() {
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "client_credentials",
    }),
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return res.data.access_token;
}

app.get("/songs", async (req, res) => {
  try {
    const token = await getAccessToken();

    const response = await axios.get(
      "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks?limit=50",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    );

    const songs = response.data.items
      .map(
        (item) =>
          item.track && {
            name: item.track.name,
            artist: item.track.artists[0].name,
            preview: item.track.preview_url,
            image: item.track.album.images[0]?.url,
          },
      )
      .filter(Boolean);

    res.json(songs);
  } catch (err) {
    console.log(err.response?.data || err.message);
    res.status(500).json({ error: "Spotify error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});

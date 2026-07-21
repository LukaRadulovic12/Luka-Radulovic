const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ==============================
// OVDJE UNESI SVOJE KREDENCIJALE
// ==============================
const CLIENT_ID = '998a78887e4e4fc683ff89728f685b3b';
const CLIENT_SECRET = '8a42e89cf09e443aa4d86c29dab0e9f1';
// ==============================

let accessToken = null;
let tokenExpiry = 0;

// Dobavi Spotify access token (Client Credentials flow)
async function getAccessToken() {
  if (accessToken && Date.now() < tokenExpiry) return accessToken;

  const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Spotify token greška: ${err}`);
  }

  const data = await res.json();
  accessToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;
  return accessToken;
}

// GET /api/rap-songs — vraća 50 rap pesama
app.get('/api/rap-songs', async (req, res) => {
  try {
    const token = await getAccessToken();

    // Koristimo više upita da dobijemo raznolike rap pesme
    const queries = [
      'genre:hip-hop year:2020-2024',
      'genre:rap year:2018-2022',
      'genre:trap year:2021-2024',
    ];

    const allTracks = [];
    const seenIds = new Set();

    for (const q of queries) {
      if (allTracks.length >= 50) break;

      const searchRes = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=track&limit=20&market=US`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!searchRes.ok) continue;

      const searchData = await searchRes.json();
      const tracks = searchData.tracks?.items || [];

      for (const track of tracks) {
        if (allTracks.length >= 50) break;
        if (!seenIds.has(track.id)) {
          seenIds.add(track.id);
          allTracks.push({
            id: track.id,
            name: track.name,
            artist: track.artists.map(a => a.name).join(', '),
            album: track.album.name,
            cover: track.album.images[0]?.url || null,
            preview_url: track.preview_url,
            spotify_url: track.external_urls.spotify,
            duration_ms: track.duration_ms,
            popularity: track.popularity,
          });
        }
      }
    }

    res.json({ success: true, total: allTracks.length, tracks: allTracks });
  } catch (err) {
    console.error('Greška:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/search?q=... — pretraga pesama
app.get('/api/search', async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: 'Nedostaje parametar q' });

  try {
    const token = await getAccessToken();
    const searchRes = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=track&limit=10&market=US`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await searchRes.json();
    const tracks = (data.tracks?.items || []).map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists.map(a => a.name).join(', '),
      album: track.album.name,
      cover: track.album.images[0]?.url || null,
      preview_url: track.preview_url,
      spotify_url: track.external_urls.spotify,
      duration_ms: track.duration_ms,
      popularity: track.popularity,
    }));
    res.json({ success: true, tracks });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n🎵 Rap Playlist server radi na http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/rap-songs\n`);
});
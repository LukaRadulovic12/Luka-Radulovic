const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const PORT = 3000;
const API_KEY = "d8usaq1r01qrt65u1r10d8usaq1r01qrt65u1r1g";

// 15 akcija
const stocks = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "META",
  "NVDA",
  "TSLA",
  "AMD",
  "NFLX",
  "INTC",
  "IBM",
  "ORCL",
  "CSCO",
  "ADBE",
  "CRM",
];

let cache = [];
let ready = false;

// helper delay
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// 🔄 puni ceo snapshot
async function updateAll() {
  try {
    const temp = [];

    for (const symbol of stocks) {
      const res = await axios.get("https://finnhub.io/api/v1/quote", {
        params: {
          symbol,
          token: API_KEY,
        },
      });

      const price = res.data?.c;

      if (price !== undefined && price !== null) {
        temp.push({
          symbol,
          price,
        });
      }

      await delay(300);
    }

    if (temp.length === stocks.length) {
      cache = temp;
      ready = true;
    }
  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
  }
}

// start + interval
updateAll();
setInterval(updateAll, 10000);

// API endpoint
app.get("/stocks", (req, res) => {
  if (!ready) {
    return res.json({
      loading: true,
      data: [],
    });
  }

  res.json({
    loading: false,
    data: cache,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

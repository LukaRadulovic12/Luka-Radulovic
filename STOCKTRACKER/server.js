const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "d8usaq1r01qrt65u1r10d8usaq1r01qrt65u1r1g";

// 30 akcija
const stocks = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "META",
  "TSLA", "NVDA", "NFLX", "AMD", "INTC",
  "IBM", "ORCL", "UBER", "LYFT", "BABA",
  "DIS", "V", "MA", "PYPL", "ADBE",
  "CSCO", "PEP", "KO", "NKE", "XOM",
  "CVX", "JPM", "BAC", "GS", "WMT"
];

// OVDE čuvamo sve cene
let stockData = {};

// funkcija za fetch
async function updateStocks() {
  try {
    const newData = {};

    for (let symbol of stocks) {
      const res = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
      );

      newData[symbol] = {
        price: res.data.c,
        high: res.data.h,
        low: res.data.l,
        open: res.data.o,
        prevClose: res.data.pc,
        time: Date.now()
      };
    }

    stockData = newData;

    console.log("🔄 Cene ažurirane:", new Date().toLocaleTimeString());
  } catch (err) {
    console.log("Greška:", err.message);
  }
}

// prvi load
updateStocks();

// svakih 15 minuta
setInterval(updateStocks, 15 * 60 * 1000);

// API endpoint
app.get("/stocks", (req, res) => {
  res.json(stockData);
});

app.listen(3000, () => {
  console.log("Server radi na http://localhost:3000");
});
const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5500",
};
const coins = [
  "bitcoin",
  "ethereum",
  "solana",
  "ripple",
  "cardano",
  "dogecoin",
  "tron",
  "avalanche-2",
  "polkadot",
  "chainlink",
  "litecoin",
  "bitcoin-cash",
  "uniswap",
  "stellar",
  "monero",
  "ethereum-classic",
  "aptos",
  "arbitrum",
];
app.use(cors(corsOptions));

app.get("/api/health/", async (request, response) => {
  response.json("Server is healthy");
});
app.get("/api/crypto", async (request, response) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(",")}&vs_currencies=usd`,
  );
  const data = await res.json();
  response.json(data);
});

app.listen(3000, () => {
  console.log("Server is running");
});

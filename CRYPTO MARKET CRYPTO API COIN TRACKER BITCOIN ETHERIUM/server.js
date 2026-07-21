const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

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
  "optimism",
  "near",
  "vechain",
  "filecoin",
  "algorand",
  "cosmos",
  "render-token",
  "injective-protocol",
  "hedera-hashgraph",
  "internet-computer",
  "sei-network",
  "immutable-x",
  "fantom",
  "the-graph",
  "maker",
  "aave",
  "okb",
  "theta-token",
  "kucoin-shares",
  "neo",
  "dash",
  "zcash",
  "waves",
  "pancakeswap-token",
  "curve-dao-token",
  "synthetix-network-token",
  "rocket-pool",
  "1inch",
  "lido-dao",
  "tezos",
  "elrond-erd-2",
];

let cache = [];
let lastFetch = 0;
let fetching = false;

// 🔥 UPDATE SAMO JEDNOM U CIKLUSU (SAFE)
async function update() {
  if (fetching) return; // LOCK da nema duplih poziva

  const now = Date.now();

  // ⛔ cooldown 30s
  if (now - lastFetch < 30000) return;

  fetching = true;

  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: coins.join(","),
          vs_currencies: "usd",
        },
      },
    );

    const data = res.data;

    cache = coins.map((c) => ({
      coin: c,
      price: data[c]?.usd ?? null,
    }));

    lastFetch = Date.now();

    console.log("UPDATED:", new Date().toLocaleTimeString());
  } catch (err) {
    console.log("429 or error:", err.message);
  }

  fetching = false;
}

// 🔥 NE interval — nego lazy update
app.get("/crypto", async (req, res) => {
  await update(); // pokušaj update (ali kontrolisan)

  res.json({
    lastUpdate: lastFetch,
    data: cache,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

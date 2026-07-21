const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOptions));

app.get("/api/health", async (request, response) => {
  response.json("Server is healthy!");
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server radi na portu ${PORT}`);
});

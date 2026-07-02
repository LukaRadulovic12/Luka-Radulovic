const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3000;
const { reciZaVesala } = require("./recizavesala");

app.use(cors());

let izabranaRec = "";

app.get("/api/nova-igra", async (request, response) => {
  let trenutnoStanjePokusaja = 10;
  const izabraniIndeks = Math.floor(Math.random() * reciZaVesala.length);
  izabranaRec = reciZaVesala[izabraniIndeks];

  response.json({
    duzina: izabranaRec.length,
    trenutnoStanjePokusajares: trenutnoStanjePokusaja,
  });

  console.log(izabranaRec);
});

app.get("/api/pogodi-slovo", (request, response) => {
  const unetoSlovo = request.query.slovo;

  const nizPogodjenihSlova = [];

  for (let i = 0; i < izabranaRec.length; i++) {
    if (izabranaRec[i] === unetoSlovo) {
      nizPogodjenihSlova.push(i);
    }
  }

  response.json(nizPogodjenihSlova);
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 3002;
const { reciZaVesala } = require("./recizavesala");

app.use(cors());

const BROJ_POKUSAJA = 14;

let izabranaRec = "";
let trenutnoStanjePokusaja;

app.get("/api/nova-igra", async (request, response) => {
  trenutnoStanjePokusaja = BROJ_POKUSAJA;
  const izabraniIndeks = Math.floor(Math.random() * reciZaVesala.length);
  izabranaRec = reciZaVesala[izabraniIndeks];

  console.log("izabranaRec");
  console.log(izabranaRec);

  response.json({
    duzina: izabranaRec.length,
    trenutnoStanjePokusajares: trenutnoStanjePokusaja,
  });
});

app.get("/api/pogodi-slovo", (request, response) => {
  const unetoSlovo = request.query.slovo;

  const nizPogodjenihSlova = [];

  for (let i = 0; i < izabranaRec.length; i++) {
    if (izabranaRec[i] === unetoSlovo) {
      nizPogodjenihSlova.push(i);
    }
  }

  if (nizPogodjenihSlova.length === 0) {
    console.log("Smanjio sam broj");
    trenutnoStanjePokusaja -= 1;
  }

  console.log("[PogodiSlovo] Resposne:");
  console.log({ nizPogodjenihSlova, trenutnoStanjePokusaja });
  response.json({ nizPogodjenihSlova, trenutnoStanjePokusaja });
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON PORT " + PORT);
});

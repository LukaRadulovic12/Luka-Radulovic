const express = require("express");
const { reciZaVesala } = require("./reci");
const cors = require("cors");

const PORT = 3001;

let izabranaRec = null;
let preostaliBrojPokusaja = 10;

const app = express();
app.use(cors());

app.get("/api/nova-igra", (request, response) => {
  function izaberiRec() {
    const randomIndeks = Math.floor(Math.random() * reciZaVesala.length);
    const randomRec = reciZaVesala[randomIndeks];
    izabranaRec = randomRec;
  }
  izaberiRec();

  // vracamo na 10, svaku novu igru
  preostaliBrojPokusaja = 10;

  response.json({ duzina: izabranaRec.length, preostaliBrojPokusaja });
  console.log(izabranaRec);
});

app.get("/api/pogodi-slovo", (request, response) => {
  const { slovo } = request.query;
  const nizPogodjenihSlova = [];
  console.log(slovo);
  for (let i = 0; i < izabranaRec.length; i++) {
    if (izabranaRec[i] === slovo) {
      nizPogodjenihSlova.push(i);
    }
  }

  if (nizPogodjenihSlova.length === 0) {
    preostaliBrojPokusaja--;
  }

  response.json({ nizPogodjenihSlova, preostaliBrojPokusaja });
});

app.get("/api/pogodi-rec", (request, response) => {
  const { rec } = request.query;

  if (rec !== izabranaRec) {
    preostaliBrojPokusaja--;
  }

  response.json({ pogodjena: izabranaRec === rec, preostaliBrojPokusaja });
});

app.listen(PORT, () => {
  console.log(`Server je na portu ${PORT}`);
});

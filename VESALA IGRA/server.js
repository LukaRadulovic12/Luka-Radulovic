const express = require("express");
const { reciZaVesala } = require("./reci");
const cors = require("cors");
const PORT = 3001;

const app = express();
let izabranaRec = null;
app.use(cors());

app.get("/api/nova-igra", (request, response) => {
  function izaberiRec() {
    const randomIndeks = Math.floor(Math.random() * reciZaVesala.length);
    const randomRec = reciZaVesala[randomIndeks];
    izabranaRec = randomRec;
  }
  izaberiRec();
  response.json(izabranaRec.length);
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
  response.json(nizPogodjenihSlova);
});
app.get("/api/pogodi-rec", (request, response) => {
  const { rec } = request.query;
  response.json(izabranaRec === rec)
});

app.listen(PORT, () => {
  console.log(`Server je na portu ${PORT}`);
});

const BACKEND_URL = "http://localhost:3001";

const inputSlova = document.getElementById("inputSlova");
const buttonSlova = document.getElementById("buttonSlova");
const buttonRec = document.getElementById("buttonRec");
const inputRec = document.getElementById("inputRec");
const prikazRec = document.getElementById("prikazRec");
const prikazSlovaEl = document.getElementById("prikazSlova");
const preostaliBrojPokusajaEl = document.getElementById("preostaliBrojPokusaja");

let duzinaIzabraneReci;
let preostaliBrojPokusaja;

async function zapocniIgru() {
  const response = await fetch(`${BACKEND_URL}/api/nova-igra`);
  const data = await response.json();

  duzinaIzabraneReci = data.duzina;
  osveziPreostaliBrojPokusaja(data.preostaliBrojPokusaja);

  // upisivanje _ za svako slovo izabrane reci
  for (let i = 0; i < duzinaIzabraneReci; i++) {
    const h2prikazSlovaEl = document.createElement("h2");
    h2prikazSlovaEl.id = i;
    h2prikazSlovaEl.innerText = "_";
    prikazSlovaEl.appendChild(h2prikazSlovaEl);
  }
}
zapocniIgru();

function osveziPreostaliBrojPokusaja(x) {
  preostaliBrojPokusaja = x;
  preostaliBrojPokusajaEl.innerText = `Preostali broj pokusaja: ${preostaliBrojPokusaja}`;
}

buttonSlova.addEventListener("click", async () => {
  const slovo = inputSlova.value;
  const response = await fetch(`${BACKEND_URL}/api/pogodi-slovo?slovo=${slovo}`);
  const data = await response.json();

  osveziPreostaliBrojPokusaja(data.preostaliBrojPokusaja);

  function dopuniSlova(nizIndeksa) {
    for (const value of nizIndeksa) {
      const h2 = document.getElementById(String(value));
      h2.innerText = slovo;
    }
  }
  dopuniSlova(data.nizPogodjenihSlova);
});

buttonRec.addEventListener("click", async () => {
  const inputRecString = String(inputRec.value);
  const response = await fetch(`${BACKEND_URL}/api/pogodi-rec?rec=${inputRecString}`);
  const data = await response.json();

  osveziPreostaliBrojPokusaja(data.preostaliBrojPokusaja);

  const h2PogodjenaRec = document.createElement("h2");

  if (data.pogodjena === true) {
    h2PogodjenaRec.innerText = "Pogodili ste rec";
  } else {
    h2PogodjenaRec.innerText = "Niste pogodili rec";
  }

  prikazRec.appendChild(h2PogodjenaRec);
});

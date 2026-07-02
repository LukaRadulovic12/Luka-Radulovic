console.log("TEST TEST TEST");

const backendURL = "http://127.0.0.1:3002";
const prikazReci = document.getElementById("prikazReci");
const buttonNovaIgra = document.getElementById("buttonNovaIgra");
const prikazPokusaja = document.getElementById("prikazPokusaja");
const inputSlova = document.getElementById("inputSlova");
const buttonSlova = document.getElementById("buttonSlova");
const brojPokusaja = document.getElementById("prikazPokusaja");

async function pronadjiNovuRec() {
  const responseIzabranaRec = await fetch(`${backendURL}/api/nova-igra`);
  let dataIzabranaRec = await responseIzabranaRec.json();

  const duzinaIzabraneReci = dataIzabranaRec.duzina;
  const trenutnoStanjePokusaja = dataIzabranaRec.trenutnoStanjePokusajares;

  const h1trenutnoStanjePokusaja = document.createElement("h1");

  h1trenutnoStanjePokusaja.innerText = trenutnoStanjePokusaja;
  console.log(trenutnoStanjePokusaja);

  for (let i = 0; i < duzinaIzabraneReci; i++) {
    const h1Slovo = document.createElement("h1");
    h1Slovo.innerText = "_";
    h1Slovo.id = i;
    prikazReci.appendChild(h1Slovo);
  }

  prikazPokusaja.appendChild(h1trenutnoStanjePokusaja);
}

buttonNovaIgra.addEventListener("click", () => {
  pronadjiNovuRec();
});

async function pronadjiNovoSlovo() {
  const inputSlovaSlovo = String(inputSlova.value);

  const responseUnetoSlovo = await fetch(`${backendURL}/api/pogodi-slovo?slovo=${inputSlovaSlovo}`);

  const { nizPogodjenihSlova, trenutnoStanjePokusaja } = await responseUnetoSlovo.json();
  osveziTrenutnoStanjePokusaja(trenutnoStanjePokusaja);

  console.log(nizPogodjenihSlova);
  console.log("trenutnoStanjePokusaja: " + trenutnoStanjePokusaja);

  for (const index of nizPogodjenihSlova) {
    const h1El = document.getElementById(String(index));
    h1El.innerText = String(inputSlovaSlovo);
  }
}

buttonSlova.addEventListener("click", async (request, response) => {
  pronadjiNovoSlovo();
});

function osveziTrenutnoStanjePokusaja(trenutniBrojPokusaja) {
  prikazPokusaja.innerText = trenutniBrojPokusaja;
}

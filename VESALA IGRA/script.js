let duzinaIzabraneReci;
const backendURL = "http://localhost:3001";
async function ispisDuzineReci() {
  const response = await fetch(`${backendURL}/api/nova-igra`);
  duzinaIzabraneReci = await response.json();
  console.log(duzinaIzabraneReci);
  const prikazSlovaEl = document.getElementById("prikazSlova");
  console.log(duzinaIzabraneReci);
  for (let i = 0; i < duzinaIzabraneReci; i++) {
    const h2prikazSlovaEl = document.createElement("h2");
    h2prikazSlovaEl.id = i;
    h2prikazSlovaEl.innerText = "_";
    prikazSlovaEl.appendChild(h2prikazSlovaEl);
  }
}
ispisDuzineReci();
const inputSlova = document.getElementById("inputSlova");
const buttonSlova = document.getElementById("buttonSlova");

buttonSlova.addEventListener("click", async () => {
  const slovo = inputSlova.value;
  const response = await fetch(`${backendURL}/api/pogodi-slovo?slovo=${slovo}`);
  const data = await response.json();
  console.log(data);
  function dopuniSlova(nizIndeksa) {
    for (const value of nizIndeksa) {
      const h2 = document.getElementById(String(value));
      h2.innerText = slovo;
      console.log(h2);
    }
  }
  dopuniSlova(data);
});
buttonRec.addEventListener("click", async () => {
  const inputRec = document.getElementById("inputRec");
  const inputRecString = String(inputRec.value);
  const responseRec = await fetch(`${backendURL}/api/pogodi-rec?rec=${inputRecString}`);
  const h2PogodjenaRec = document.createElement("h2");
  if (await responseRec.json() === true) {
    h2PogodjenaRec.innerText = "Pogodili ste rec";
  } else {
    h2PogodjenaRec.innerText = "Niste pogodili rec";
  }
  document.getElementById("prikazRec").appendChild(h2PogodjenaRec);
});

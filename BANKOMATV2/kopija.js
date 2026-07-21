aBanka = banke[deloviUnosaTeksta[0].naziv];
  let nadjenaUsluga = deloviUnosaTeksta[1];
  let nadjenIznos = deloviUnosaTeksta[2];
  return nadjenaBanka;
  return nadj
const inputBankeIUslugeEl = document.getElementById("inputNazivBanke");
const bankaContainerEl = document.getElementById("bankaContainer");
const buttonTraziBanku = document.getElementById("buttonTraziBanku");

function nadjiBankuIUslugu(inputBankeIUsluge) {
  let deloviUnosaTeksta = [];
  deloviUnosaTeksta = inputBankeIUsluge.split(" ");
  let nadjenenaUsluga;
  return nadjenIznos;
}

function depozitujNovacNaRacun(inputBankeIUsluge) {
  let deloviUnosaTeksta = [];
  deloviUnosaTeksta = inputBankeIUsluge.split(" ");
  let nadjenaBanka = banke[deloviUnosaTeksta[0]];
  let nadjenaUsluga = deloviUnosaTeksta[1];
  let nadjenIznos = deloviUnosaTeksta[2];
  let iznosDepozita = nadjenIznos;
  switch (nadjenaUsluga) {
    case "depozit":
      const novoStanjeRacunaDepozit = banke.stanje + iznosDepozita;
      banke.stanje = novoStanjeRacunaDepozit;
      return banke.stanje;
      break;

    default:
      break;
  }
}
function podigniNovacSaRacuna(inputBankeIUsluge) {
  let deloviUnosaTeksta = [];
  deloviUnosaTeksta = inputBankeIUsluge.split(" ");
  let nadjenaBanka = banke[deloviUnosaTeksta[0]];
  let nadjenaUsluga = deloviUnosaTeksta[1];
  let nadjenIznos = deloviUnosaTeksta[2];
  let iznosPodizanjaNovca = nadjenIznos;
  switch (nadjenaUsluga) {
    case "podizanjenovca":
      const novoStanjeRacunaPodizanjeNovca = banka.stanje - iznosPodizanjaNovca;
      banka.stanje = novoStanjeRacunaPodizanjeNovca;
      return banka.stanje;
      break;

    default:
      break;
  }
}



function prikaziBanku(banka) {
  bankaContainerEl.innerHTML = "";

  const nazivBankeEl = document.createElement("h1");
  const stanjenaRacunuEl = document.createElement("h2");
  const slikaBankeEl = document.createElement("img");

  nazivBankeEl.innerText = banka.naziv;
  stanjenaRacunuEl.innerText = banka.stanje;
  slikaBankeEl.src = banka.slika;

  bankaContainerEl.appendChild(nazivBankeEl);
  bankaContainerEl.appendChild(stanjenaRacunuEl);
  bankaContainerEl.appendChild(slikaBankeEl);
}
buttonTraziBanku.addEventListener("click", () => {
  nadjiBankuIUslugu(inputBankeIUslugeEl.value);
  depozitujNovacNaRacun(inputBankeIUslugeEl.value);
  podigniNovacSaRacuna(inputBankeIUslugeEl.value);
  prikaziBanku(inputBankeIUslugeEl.value);
});
 
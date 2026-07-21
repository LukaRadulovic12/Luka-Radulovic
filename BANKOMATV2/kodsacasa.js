const banke = {
  aik: {
    naziv: "aikbanka",
    stanje: 10000,
    slika:
      "https://www.danas.rs/wp-content/uploads/2025/04/AikBank-fotografija-e1744361384366.jpg",
  },
  erste: {
    naziv: "erstebanka",
    stanje: 9000,
    slika:
      "https://cdn0.erstegroup.com/gemlip/v2/3gXAqxVYVD94EZtkFruQ15N31naH/dam/rs/ebs/www_erstebank_rs/onama/Sirius/2024/Sirius-2024-8-4k.jpg.7077dba304264cd4.xywh.w1280.jpg",
  },
  bancaintesa: {
    naziv: "aikbanka",
    stanje: 12000,
    slika:
      "https://www.belgradewaterfront.com/static/uploads/Banca-Intesa-Beograd-na-vodi-1536x1024-2-640x640.jpg",
  },
};

const bankaContainerEl = document.getElementById("bankaContainer");
const inputNazivBankeEl = document.getElementById("inputNazivBanke");
const buttonTraziBankuEl = document.getElementById("buttonTraziBanku");

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

function nadjiBanku(nazivBanke) {
  nazivBanke = nazivBanke.trim();
  const nadjenaBanka = banke[nazivBanke];
  return nadjenaBanka;
}

function depozitujNovacNaRacun(iznosDepozita, banka) {
  const novoStanjeRacuna = banka.stanje + iznosDepozita;
  banka.stanje = novoStanjeRacuna;
  return banka.stanje;
}

buttonTraziBankuEl.addEventListener("click", () => {
  let deloviUnosaTeksta = [];
  deloviUnosaTeksta = inputNazivBankeEl.split(" ") 
  const nadjenaBanka = nadjiBanku(nazivBanke);
  prikaziBanku(nadjenaBanka);
});

const banke = {
  aikbanka: {
    naziv: "aikbanka",
    iznos: 100000,
    slika:
      "https://www.danas.rs/wp-content/uploads/2025/04/AikBank-fotografija-e1744361384366.jpg",
  },
  raiffeisenbanka: {
    naziv: "raiffeisenbanka",
    iznos: 130000,
    slika:
      "https://www.raiffeisenbank.rs/content/dam/rbi/retail/eu/rs/common/slike/o-nama/zgrada-raiffeisen-banke.jpg.transform.rbistage.jpg",
  },
  erstebanka: {
    naziv: "erstebanka",
    iznos: 160000,
    slika:
      "https://cdn0.erstegroup.com/gemlip/v2/44rkRs4o9GwUr1tB75vCNsjZBxrR/dam/rs/ebs/www_erstebank_rs/onama/Sirius/2024/Sirius-2024-8-4k-mobile.jpg.5b1d36a2e7a211e3.xywh.w3840w2560w1920w1280w1024w820w570_w570.webp",
  },
  otpbanka: {
    naziv: "otpbanka",
    iznos: 110000,
    slika:
      "https://www.danas.rs/wp-content/uploads/2022/04/OTP-Banka-Srbija_BGD-scaled-e1650374227218-1000x560.jpg",
  },
  nlbkomercijalnabanka: {
    naziv: "nlbkomercijalnabanka",
    iznos: 150000,
    slika:
      "https://magazinbiznis.rs/wp-content/uploads/2025/11/novembar-NLB-Komercijalna-banka-Autor-Marko-Petrovic.jpg",
  },
  bancaintesa: {
    naziv: "bancaintesa",
    iznos: 100000,
    slika:
      "https://res.cloudinary.com/bib-bank/image/upload/w_auto,c_scale/fl_lossy/c_scale,w_auto/f_auto,q_auto/dpr_auto/fl_lossy/c_scale,w_798/f_auto,q_auto/dpr_auto/test/publicportal/Slika_Zgrade_5_M",
  },
  bankapostanskastedionica: {
    naziv: "bankapostanskastedionica",
    iznos: 100000,
    slika:
      "https://www.ekapija.com/thumbs169/postanska_stedionica_030114_tw1024.jpg",
  },
  unicreditbanka: {
    naziv: "unicreditbanka",
    iznos: 190000,
    slika:
      "https://www.danas.rs/wp-content/uploads/2025/04/AikBank-fotografija-e1744361384366.jpg",
  },
  addikobanka: {
    naziv: "addikobanka",
    iznos: 240000,
    slika:
      "https://nova.rs/media/images/2026/3/1773308883_Addiko_Bank_PR_tekst_fo.format-jpeg.width-500.jpg",
  },
  procreditbanka: {
    naziv: "procreditbanka",
    iznos: 230000,
    slika: "https://forbes.n1info.rs/wp-content/uploads/2024/04/naslovna1.jpg",
  },
};

const unosBankeUnosaIIznosaEl = document.getElementById("inputBankeIUsluge");
const buttonBankeIUslugeEl = document.getElementById("buttonBankeIUsluge");

function nadjiBankuUsluguIIznos(unosBankeUslugeIIznosa) {
  const deloviUnosa = unosBankeUslugeIIznosa.split(" ");
  const nadjenaBanka = banke[deloviUnosa[0]];
  const nadjenaUsluga = deloviUnosa[1];
  const nadjenIznos = Number(deloviUnosa[2]);
  switch (nadjenaUsluga) {
    case "depozit":
      const novoStanjeNaRacunuDepozit = nadjenaBanka.iznos + nadjenIznos;
      nadjenaBanka.iznos = novoStanjeNaRacunuDepozit;
      break;
    case "podizanjenovca":
      const novoStanjeNaRacunuPodizanjeNovca = nadjenaBanka.iznos - nadjenIznos;
      nadjenaBanka.iznos = novoStanjeNaRacunuPodizanjeNovca;
      break;

    default:
      break;
  }
}
const divPrikazBankeEl = document.getElementById("divPrikazBanke");

function prikaziBanku(unosBankeUslugeIIznosa) {
  divPrikazBankeEl.innerHTML = "";

  const deloviUnosa = unosBankeUslugeIIznosa.split(" ");
  const nadjenaBanka = banke[deloviUnosa[0]];
  const nadjenaUsluga = deloviUnosa[1];
  const nadjenIznos = Number(deloviUnosa[2]);
  const nadjenNaziv = nadjenaBanka.naziv;
  
  let h1NazivBanke = document.createElement("h1");
  h1NazivBanke.id = "h1NazivBanke";
  h1NazivBanke.innerText = nadjenNaziv;
  let h2StanjeRacuna = document.createElement("h2");
  h2StanjeRacuna.id = "h2StanjeRacuna";
  h2StanjeRacuna.innerText = nadjenaBanka.iznos;
  let slikaBanke = document.createElement("img");
  slikaBanke.id = "slikaBanke";
  slikaBanke.src = nadjenaBanka.slika;

  divPrikazBankeEl.appendChild(h1NazivBanke);
  divPrikazBankeEl.appendChild(h2StanjeRacuna);
  divPrikazBankeEl.appendChild(slikaBanke);
}
buttonBankeIUslugeEl.addEventListener("click", () => {
  nadjiBankuUsluguIIznos(unosBankeUnosaIIznosaEl.value);
  prikaziBanku(unosBankeUnosaIIznosaEl.value);
});

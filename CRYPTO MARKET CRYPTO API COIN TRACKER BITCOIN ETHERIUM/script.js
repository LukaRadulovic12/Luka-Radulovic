async function loadCrypto() {
  const res = await fetch("http://localhost:3000/crypto");
  const json = await res.json();

  const container = document.getElementById("crypto");
  container.innerHTML = "";

  json.data.forEach((c) => {
    container.innerHTML += `
      <div id="cryptodiv">
        ${c.coin}: $${c.price}
      </div>
    `;
  });
}

// ❗ BITNO: NE AUTO SPAM
loadCrypto();

const inputPretragaValuta = document.getElementById("inputPretragaValuta");
const buttonPretragaValuta = document.getElementById("buttonPretragaValuta");
const pretragaValutaContainer = document.getElementById(
  "pretragaValutaContainer",
);

function pronadjiValutu(inputPretrage) {
  pretragaValutaContainer.innerHTML = "";
  async function loadCrypto() {
    res = await fetch("http://localhost:3000/crypto");
    json = await res.json();
    json.data.forEach((coin) => {
      if (coin.coin.toLowerCase() === inputPretrage.toLowerCase()) {
        pretragaValutaContainer.innerHTML += `${coin.coin}: $${coin.price}`;
      }
    });
  }
  loadCrypto();
}

buttonPretragaValuta.addEventListener("click", () => {
  pronadjiValutu(inputPretragaValuta.value);
});

const inputKupovinaIProdajaValuta = document.getElementById(
  "inputKupovinaIProdajaValuta",
);
const buttonKupovinaIProdajaValuta = document.getElementById(
  "buttonKupovinaIProdajaValuta",
);
let kapital = Number(localStorage.getItem("kapital"));

if (!kapital) {
  kapital = 1000000;
  localStorage.setItem("kapital", kapital);
}

const kapitalPrikaz = document.getElementById("kapital");
kapitalPrikaz.innerText = kapital;
let portfolio = JSON.parse(localStorage.getItem("portfolio")) || {};

const ispisKupljenihValuta = document.getElementById("ispisKupljenihValuta");
if (!portfolio) {
  portfolio = {};
  localStorage.setItem("portfolio", JSON.stringify(portfolio));
}
function ispisiPortfolio() {
  ispisKupljenihValuta.innerHTML = Object.entries(portfolio)
    .map(([coin, amount]) => `${coin}: ${amount}`)
    .join("<br>");
}
async function izvrsiKupovinuIProdaju(inputKupovineIProdaje) {
  let deloviUnosa = inputKupovineIProdaje.split(" ");

  let kapital = Number(localStorage.getItem("kapital"));

  const izabranaValuta = deloviUnosa[0];
  const izabranaRadnja = deloviUnosa[1];
  const izabranaKolicina = Number(deloviUnosa[2]);

  const res = await fetch("http://localhost:3000/crypto");
  const json = await res.json();

  const coin = json.data.find(
    (c) => c.coin.toLowerCase() === izabranaValuta.toLowerCase(),
  );

  if (!coin) {
    console.log("Coin nije pronađen");
    return;
  }

  switch (izabranaRadnja) {
    case "kupujem":
      localStorage.setItem("portfolio", JSON.stringify(portfolio));
      kapital -= coin.price * izabranaKolicina;
      // 🔥 UPDATE PORTFOLIO (DUPLI OBJEKAT)
      if (portfolio[coin.coin]) {
        portfolio[coin.coin] += izabranaKolicina;
        localStorage.setItem("portfolio", JSON.stringify(portfolio));

        ispisiPortfolio();
      } else {
        portfolio[coin.coin] = izabranaKolicina;
      }
      localStorage.setItem("kapital", kapital);

      kapitalPrikaz.innerText = kapital;

      console.log("Novi kapital:", kapital);
      break;
  }
}
buttonKupovinaIProdajaValuta.addEventListener("click", () => {
  izvrsiKupovinuIProdaju(inputKupovinaIProdajaValuta.value);
});
const buttonresetKapitala = document.getElementById("resetKapitala");

buttonresetKapitala.addEventListener("click", () => {
  kapital = 1000000;
  localStorage.setItem("kapital", kapital);
  kapitalPrikaz.innerText = kapital;

  console.log("Kapital resetovan");
});

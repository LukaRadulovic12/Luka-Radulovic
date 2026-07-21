let stockData = {};

let kapital = Number(localStorage.getItem("kapital")) || 100000;

const inputAkcijeIUslugeEl = document.getElementById("inputAkcijeIUsluge");
const kapitalIspisEl = document.getElementById("h3KapitalIspis");
const buttonAkcijeIUslugeEl = document.getElementById("buttonAkcijeIUsluge");

kapitalIspisEl.innerText = kapital;

async function loadStocks() {
  try {
    const res = await fetch("http://localhost:3000/stocks");
    const data = await res.json();

    stockData = data;

    const tbody = document.getElementById("stocksBody");
    tbody.innerHTML = "";

    for (const symbol in data) {
      const s = data[symbol];

      tbody.innerHTML += `
        <tr>
          <td>${symbol}</td>
          <td>${s.price ?? "-"}</td>
          <td>${s.high ?? "-"}</td>
          <td>${s.low ?? "-"}</td>
          <td>${s.open ?? "-"}</td>
          <td>${s.prevClose ?? "-"}</td>
        </tr>
      `;
    }
  } catch (err) {
    console.log(err);
  }
}

loadStocks();
setInterval(loadStocks, 30000);

let kupljeneAkcije = JSON.parse(localStorage.getItem("kupljeneAkcije")) || [];
const ispisKupljenihAkcijaEl = document.getElementById("ispisKupljenihAkcija");

function nadjiAkciju(inputAkcijeIUsluge) {
  let deloviUnosaAkcijeIUsluge = [];
  deloviUnosaAkcijeIUsluge = inputAkcijeIUslugeEl.value.split(" ");

  const nadjenaAkcija = stockData[deloviUnosaAkcijeIUsluge[0]];
  const nadjenaUsluga = deloviUnosaAkcijeIUsluge[1];
  const nadjenIznos = Number(deloviUnosaAkcijeIUsluge[2]);

  if (!nadjenaAkcija) {
    console.log("Akcija ne postoji");
    return;
  }

  switch (nadjenaUsluga) {
    case "kupujem":
      kapital = Number(kapital) - Number(nadjenaAkcija.price) * nadjenIznos;
      kapitalIspisEl.innerText = kapital;
      console.log("KUPIO SAM " + deloviUnosaAkcijeIUsluge[0]);
      localStorage.setItem("kapital", kapital);
      kupljeneAkcije.push({
        simbol: deloviUnosaAkcijeIUsluge[0],
        cenaKupovine: nadjenaAkcija.price,
        kolicina: Number(deloviUnosaAkcijeIUsluge[2]),
      });

      localStorage.setItem("kupljeneAkcije", JSON.stringify(kupljeneAkcije));
      const h1ispisAkcija = document.createElement("h1");

      h1ispisAkcija.innerText = `${deloviUnosaAkcijeIUsluge[0]} - ${deloviUnosaAkcijeIUsluge[2]} kom - ${nadjenaAkcija.price}$`;

      ispisKupljenihAkcijaEl.appendChild(h1ispisAkcija);
      break;

    default:
      console.log("Nepoznata operacija");
  }
}

function prikaziKupljeneAkcije(params) {}

buttonAkcijeIUslugeEl.addEventListener("click", () => {
  nadjiAkciju(inputAkcijeIUslugeEl.value);
});

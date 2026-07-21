let inputprihoda = document.getElementById("inputprihoda");
let inputrashoda = document.getElementById("inputrashoda");
let privremeninazivitroskova = document.getElementById(
  "privremeninazivitroskova",
);
let prviispisnaziva = true;
let inputjosnazivatroskova = "";
let inputnazivarashoda = document.getElementById("inputnazivarashoda");
const buttonkalkulacija = document.getElementById("buttonkalkulacija");
const konacanrashodispis = document.getElementById("konacanrashod");
const konacanprihodispis = document.getElementById("konacanprihod");
const nazivirashoda = [];
let cenaruda = document.getElementById("cenaruda");
const ispisnazivarashoda = document.getElementById("ispisnazivarashoda");
buttonkalkulacija.addEventListener("click", () => {
  rashodutoku = Number(inputrashoda.value);
  prihodutoku = Number(inputprihoda.value);
  buttonnemamjostroskova = document.createElement("button");
  buttonjostroskova = document.createElement("button");
  buttonjostroskova.id = "buttonjostroskova";
  buttonnemamjostroskova.id = "buttonnemamjostroskova";
  buttonjostroskova.innerText = "IMAM JOS TROSKOVA DA UNESEM";
  buttonnemamjostroskova.innerText = "NEMAM JOS TROSKOVA DA UNESEM";
  container.appendChild(buttonnemamjostroskova);
  container.appendChild(buttonjostroskova);
  buttonnemamjostroskova.addEventListener("click", () => {
    konacanprihodispis.innerText = prihodutoku;
    konacanrashodispis.innerText = rashodutoku;
    if (inputjosnazivatroskova !== "") {
      nazivirashoda.push(inputjosnazivatroskova.value);
    }
    if (prviispisnaziva === true) {
      nazivirashoda.push(inputnazivarashoda.value);
      prviispisnaziva = false;
      console.log(nazivirashoda);
    }
    JSON.stringify(nazivirashoda);
    ispisnazivarashoda.innerText = nazivirashoda;
    let h1informacija = document.createElement("h1");
    let procenat = (rashodutoku / prihodutoku) * 100;
    const h1status = document.getElementById("h1status");
    if (procenat >= 90) {
      h1informacija.innerText = "DRAGI KORISNICE PREVELIKI SU VAM TROSKOVI";
      h1status.appendChild(h1informacija);
    } else {
      h1informacija.innerText =
        "DRAGI KORISNICE NISU VAM PREVELIKI TROSKOVI OVO SU OPCIJE ULAGANJA PREOSTALOG NOVCA";
      h1status.appendChild(h1informacija);
      fetch(
        "https://api.metals.dev/v1/latest?api_key=KHVIZ8K4SUB6IJMXC2QY503MXC2QY&currency=USD",
      )
        .then((res) => res.json())
        .then((data) => {
          const gold = document.createElement("p");
          gold.textContent = "Gold: " + data.metals.gold;

          const silver = document.createElement("p");
          silver.textContent = "Silver: " + data.metals.silver;

          cenaruda.appendChild(gold);
          cenaruda.appendChild(silver);
        });
    }
  });
  buttonjostroskova.addEventListener("click", () => {
    let inputjostroskova = document.createElement("input");
    inputjostroskova.id = "inputjostroskova";
    container.appendChild(inputjostroskova);
    let h1josnazinatroskova = document.createElement("h1");
    h1josnazinatroskova.innerText = "UNESI JOS NAZIVA TROSKOVA";
    container.appendChild(h1josnazinatroskova);
    inputjosnazivatroskova = document.createElement("input");
    inputjosnazivatroskova.id = "inputjosnazivatroskova";
    container.appendChild(inputjosnazivatroskova);
    prviispisnaziva = false;
    nazivirashoda.push(inputnazivarashoda.value);
    JSON.stringify(nazivirashoda);
    privremeninazivitroskova.innerText = nazivirashoda;
    container.appendChild(buttonkalkulacija);
    buttonkalkulacija.addEventListener("click", () => {
      rashodutoku += Number(inputjostroskova.value);
      console.log(inputjostroskova.value);
    });
  });
});

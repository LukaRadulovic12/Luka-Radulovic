let inputprihoda = document.getElementById("inputprihoda");
let inputrashoda = document.getElementById("inputrashoda");
let privremeninazivitroskova = document.getElementById(
  "privremeninazivitroskova",
);
let inputnazivarashoda = document.getElementById("inputnazivarashoda");
const buttonkalkulacija = document.getElementById("buttonkalkulacija");
const konacanrashodispis = document.getElementById("konacanrashod");
const konacanprihodispis = document.getElementById("konacanprihod");
const nazivirashoda = [];
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
    nazivirashoda.push(inputnazivarashoda.value);
    if (!isNaN(inputnazivarashoda)) {
      nazivirashoda.push(inputjosnazivatroskova.value);
    }
    JSON.stringify(nazivirashoda);
    ispisnazivarashoda.innerText = nazivirashoda;
  });
  buttonjostroskova.addEventListener("click", () => {
    let inputjostroskova = document.createElement("input");
    inputjostroskova.id = "inputjostroskova";
    container.appendChild(inputjostroskova);
    let h1josnazinatroskova = document.createElement("h1");
    h1josnazinatroskova.innerText = "UNESI JOS NAZIVA TROSKOVA";
    container.appendChild(h1josnazinatroskova);
    let inputjosnazivatroskova = document.createElement("input");
    inputjosnazivatroskova.id = "inputjosnazivatroskova";
    container.appendChild(inputjosnazivatroskova);
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

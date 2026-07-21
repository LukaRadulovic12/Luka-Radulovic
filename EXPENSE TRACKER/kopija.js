let inputprihoda = document.getElementById("inputprihoda");
let inputrashoda = document.getElementById("inputrashoda");
let prihod = inputprihoda.value;
let rashod = Number(inputrashoda.value);
let konacanprihod = document.getElementById("konacanprihod");
let konacanrashod = document.getElementById("konacanrashod");
let troskovi = 0;
let savtrosak = 0;
const buttonkalkulacija = document.getElementById("buttonkalkulacija");
const container = document.getElementById("container");
buttonkalkulacija.addEventListener("click", () => {
  prihod = inputprihoda.value;
  troskovi += inputrashoda.value;
  const buttonjostroskova = document.createElement("button");
  buttonjostroskova.id = "buttonjostroskova";
  buttonjostroskova.innerText = "IMAM JOS TROSKOVA";
  const buttonnemamvisetroskova = document.createElement("button");
  buttonnemamvisetroskova.id = "buttonnemamvisetroskova";
  buttonnemamvisetroskova.innerText = "NEMAM JOS TROSKOVA";
  container.appendChild(buttonnemamvisetroskova);
  container1.appendChild(buttonjostroskova);
  buttonnemamvisetroskova.addEventListener("click", () => {
    let prihod = inputprihoda.value;
    let rashod = inputrashoda.value;
    savtrosak = savtrosak + rashod;
    konacanrashod.innerText = savtrosak;
  });
  buttonjostroskova.addEventListener("click", () => {
    let inputjostroskova = document.createElement("input");
    inputjostroskova.id = "inputjostroskova";
    container1.appendChild(inputjostroskova);
    container1.appendChild(buttonkalkulacija);
  });
});

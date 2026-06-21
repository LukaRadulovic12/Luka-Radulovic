const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const now = new Date();

console.log("Local ISO:", now.toLocaleString());

console.log("UTC/ISO:", now.toISOString());

rl.question("UNESI JEDNACINU:", function (input) {
  let operacija;

  if (input.includes("+")) operacija = "+";
  else if (input.includes("-")) operacija = "-";
  else if (input.includes("*")) operacija = "*";
  else if (input.includes("/")) operacija = "/";

  const delovi = input.split(operacija);

  const prvibroj = Number(delovi[0]);
  const drugibroj = Number(delovi[1]);
  let resenje = 0;
  if (operacija === "+") {
    resenje = prvibroj + drugibroj;
  } else if (operacija === "-") {
    resenje = prvibroj - drugibroj;
  } else if (operacija === "*") {
    resenje = prvibroj * drugibroj;
  } else if (operacija === "/") {
    resenje = prvibroj / drugibroj;
  }
  console.log(resenje);
  fs.appendFileSync(
    "rezultati.txt",
    `${input} = ${resenje}\n${now.toISOString()} \n`,
  );
  rl.close();
});

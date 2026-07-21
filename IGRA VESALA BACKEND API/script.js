let pokusaji = localStorage.setItem("pokusaji", 8);
let brojPokusajaIspis = document.getElementById("brojPokusajaIspis");
brojPokusajaIspis.innerText = localStorage.getItem("pokusaji");
const unosSlova = document.getElementById("unosSlova");
const unosResenja = document.getElementById("unosResenja");
const buttonUnosSlova = document.getElementById("buttonUnosSlova");
const buttonUnosResenja = document.getElementById("buttonUnosResenja");

async function proveraKonekcije() {
  const response = await fetch("http://127.0.0.1:3000/api/health");

  const data = await response.json();
  console.log(data);
}
proveraKonekcije();

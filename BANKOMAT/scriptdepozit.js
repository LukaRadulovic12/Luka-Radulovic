let stanjeracuna = document.getElementById("stanjeracuna");
stanjeracuna.value = "10000";
stanjeracuna.innerHTML = stanjeracuna.value;
let racunanje = Number(stanjeracuna.value);
let dodavanje = document.getElementById("iznos");
const buttonzadodavanje = document.getElementById("submitbutton");
buttonzadodavanje.addEventListener("click", () => {
  racunanje += Number(iznos.value);
  stanjeracuna.value = racunanje;
  stanjeracuna.innerText = racunanje;
});

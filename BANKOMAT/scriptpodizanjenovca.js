const podizanjenovca = document.getElementById("inputpodizanjanovca");
let stanjeracuna = document.getElementById("stanjeracuna");
const submitbutton = document.getElementById("submitbutton");
stanjeracuna.value = "10000";
stanjeracuna.innerText = "10000";
let racunanje = stanjeracuna.value;
submitbutton.addEventListener("click", () => {
  racunanje = racunanje - podizanjenovca.value;
  stanjeracuna.innerText = racunanje;
  stanjeracuna.value = racunanje;
});
stanjeracunanastanjeracuna = document.getElementById(
  "stanjeracunanastanjeracuna",
);

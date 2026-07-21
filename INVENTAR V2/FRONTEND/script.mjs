import {
  inputKorisnickogImena,
  inputLozinke,
  submitLogin,
  submitRegister,
  navigateLogin,
  navigateRegister,
} from "./selectors.mjs";

submitRegister.addEventListener("click", () => {
  window.location.href = "127.0.0.1:5501/FRONTEND/register.html";
});

async function ulogujKorisnika() {
  const response = fetch();
}

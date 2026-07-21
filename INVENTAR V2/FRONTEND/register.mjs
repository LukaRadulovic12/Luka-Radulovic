import {
  inputKorisnickogImena,
  inputLozinke,
  inputEmaila,
  submitLogin,
  submitRegister,
  navigateLogin,
  navigateRegister,
} from "./selectors.mjs";
import { getBackendUrl } from "../konstante.mjs";

async function registrujKorisnika() {
  const korisnickoIme = String(inputKorisnickogImena.value);
  const email = String(inputEmaila.value);
  const lozinka = String(inputLozinke.value);
  console.log("/api/register saljem request");
  console.log(korisnickoIme, email, lozinka);
  const response = await fetch(`http://${getBackendUrl()}/api/register`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ korisnickoIme, email, lozinka }),
  });
  const data = await response.json();
  console.log(data);
}

submitRegister.addEventListener("click", async (event) => {
  event.preventDefault();
  await registrujKorisnika();
});

import express from "express";
import cors from "cors";
import { pool, unesiKorisnika } from "./database.mjs";
import { BACKEND_PORT } from "../konstante.mjs";
const app = express();
app.use(cors());
app.use(express.json())

app.post("/api/register", async (request, response) => {
  console.log(request.body);
  const { korisnickoIme, email, lozinka } = request.body;
  console.log("/api/register request");
  try {
    const rezultat = unesiKorisnika(korisnickoIme, email, lozinka);
    console.log(rezultat);
    response.status(200).send()
  } catch (error) {
    response
      .status(400)
      .json({ errorCode: "Error", errorMessage: error.message });
  }
});

app.listen(BACKEND_PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${BACKEND_PORT}`);
});

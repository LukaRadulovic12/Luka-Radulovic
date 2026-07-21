import mysql from "mysql2";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3307",
  user: "root",
  password: "",
  database: "inventar",
});

function unesiKorisnika(korisnickoIme, email, lozinka) {
  try {
    const rezultat = pool.query(
      "INSERT INTO korisnici (korisnickoIme, email, lozinka) VALUES (?, ?, ?)",
      [korisnickoIme, email, lozinka],
    );
    return rezultat;
  } catch (error) {
    console.log(error)
    throw new Error("SQL ERROR");
  }
}

export { pool, unesiKorisnika };

import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import cryptoRandomString from "crypto-random-string";
import db from "./db.js";

const users = [{ username: "admin", password: "admin" }];

const app = express();
app.use(cors());
app.use(express.json());

db.connectToDatabase();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const alphaHash = cryptoRandomString({ length: 128, type: "alphanumeric" });
    db.saveSession(alphaHash);
    res.json({ token: alphaHash });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
});

app.get("/api/protected", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  const session = await db.getSession(token);

  if (session) {
    res.json({ message: "Access granted to protected route" });
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

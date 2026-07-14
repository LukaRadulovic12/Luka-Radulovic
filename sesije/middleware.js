import db from "./db";

async function authenticate(req, res, next) {
  const sessionToken = req.headers.authorization?.split(" ")[1];

  const session = await db.getSession(sessionToken);

  if (session) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}

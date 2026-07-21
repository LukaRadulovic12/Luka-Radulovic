import mysql from "mysql2/promise";

export class Database {
  connection;

  async connectToDatabase() {
    try {
      this.connection = await mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "sesije_vezba",
      });

      console.log("Connected to MySQL successfully!");
    } catch (error) {
      console.error("Database connection failed:", error.message);
    }
  }

  async saveSession(token) {
    try {
      const query = "INSERT INTO sesije (token, active) VALUES (?, ?)";
      await this.connection.execute(query, [token, 1]);
      console.log("Session saved successfully!");
    } catch (error) {
      console.error("Failed to save session:", error.message);
    }
  }

  async getSession(token) {
    try {
      const query = "SELECT * FROM sesije WHERE token = ? AND active = 1";
      const [rows] = await this.connection.execute(query, [token]);
      return rows.length > 0 ? rows : null;
    } catch (error) {
      console.error("Failed to retrieve session:", error.message);
      return null;
    }
  }
}

export default new Database();

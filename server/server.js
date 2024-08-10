const PORT = process.env.PORT ?? 5050;
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello there...");
});

app.get("/transactions", async (req, res) => {
  try {
    const transactions = await pool.query("SELECT * FROM transactions");
    res.json(transactions.rows);
  } catch (err) {
    console.log(err);
  }
});

app.get("/transactions/:userEmail", async (req, res) => {
  try {
    const { userEmail } = req.params;
    const transactions = await pool.query(
      "SELECT * FROM transactions WHERE user_email = $1",
      [userEmail]
    );
    res.json(transactions.rows);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

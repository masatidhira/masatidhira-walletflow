const PORT = process.env.PORT ?? 5050;
const express = require("express");
const app = express();
const pool = require("./db");

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

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

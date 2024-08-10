const PORT = process.env.PORT ?? 5050;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello there...");
});

app.get("/transactions", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

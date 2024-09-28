const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env.local" });
const PORT = process.env.PORT;

app.use("/", (req, res, next) => {
  res.send("SERVER IS LIVE ");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

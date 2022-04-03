const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is live");
})

const PORT = 3000;
const listener = app.listen(PORT, () => {
  console.log(`Listening on port ${listener.address().port}`)
})

module.exports = app;

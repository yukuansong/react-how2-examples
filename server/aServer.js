const express = require("express");

const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log("Express is listening on port: " + PORT));

app.get("/get-data", (req, res) => {
  const start = new Date().getTime();
  sleep(300);
  res.send("Here is the data");
});

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay) {}
}

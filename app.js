const express = require("express");
const api = express();
const port = 3030;

api.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

api.get("/text", (req, res) => {
  res.send("sone text");
});

api.get("/json", (req, res) => {
  res.json({ text: "some json" });
});

api.get("/jsonstring", (req, res) => {
  res.send(JSON.stringify(json));
});

api.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

const express = require("express");
const app = express();
const dbFile = "./.data/sqlite.db";
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});
var listener = app.listen(process.env.PORT, () => {
});
const express = require("express");
const cors = require("cors");

const path = require("path");
// Helpers
const { getFiles } = require("./src/helpers/read");

// creating a instance of express
const app = express();

app.use(cors());

app.get("/api/tumors", async (req, res) => {
  const url = path.resolve(__dirname, "../frontend/src/assets/tumors");
  const files = await getFiles(url);
  files.forEach((element) => {
    element.src = "/src/assets/tumors/" + element.name;
  });
  res.send(files);
});

app.get("/api/wo_tumors", async (req, res) => {
  const url = path.resolve(__dirname, "../frontend/src/assets/wo_tumors");
  const files = await getFiles(url);
  files.forEach((element) => {
    element.src = "/src/assets/wo_tumors/" + element.name;
  });
  res.send(files);
});

app.listen(8080, console.log("Running on: http://localhost:8080/"));

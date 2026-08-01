const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("hello text");
});

app.use("/text", (req, res) => {
  res.send("hello text page");
});

app.use("/hello", (req, res) => {
  res.send("hello from the server");
});

app.listen(3000, () => {
  console.log("server is successfully on a port 3000...");
});

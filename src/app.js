const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    //route handler
    //res.send("route handler 1");
    next();
  },
  (req, res, next) => {
   // res.send("second response");
    next();
  },
  (req, res, next) => {
   // res.send("third response");
    next();
  },
  (req, res, next) => {
    //res.send("fourth response");
    next();
  },
  (req, res, next) => {
    res.send("fifth response");
    next();
  },
);
app.listen(3000, () => {
  console.log("server is successfully on a port 3000...");
});

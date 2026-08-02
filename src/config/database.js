// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://harshal:harshal823723@cluster0.ilpfmcw.mongodb.net/devTinder",
  );
};

module.exports = connectDB;

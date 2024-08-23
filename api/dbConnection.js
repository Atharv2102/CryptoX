const mongoose = require("mongoose");

const uri =
  "mongodb+srv://atharv:atharv@cryptox.whmyw.mongodb.net/?retryWrites=true&w=majority&appName=CryptoX";
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;

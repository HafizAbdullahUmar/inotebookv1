const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/inotebook";
mongoose.set("strictQuery", false);
const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to Monogo Succesfully");
    })
    .catch((err) => {
      console.log("Connection failed", err);
    });
};

module.exports = connectToMongo;

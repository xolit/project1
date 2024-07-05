const mongoose = require("mongoose");

const conectdb = async () => {
  await mongoose
    .connect(process.env.MONGO_URL_LOCAL, {
      useNewUrlParser: true
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((error) => {
      console.log("error :" + error);
    });
};

module.exports = conectdb;

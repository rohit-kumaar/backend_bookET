const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/booket", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;

const mongoose = require("mongoose");
const url =
  "mongodb+srv://dbUser:dbUser@cluster0.zqxtt.mongodb.net/ShapeAI?retryWrites=true&w=majority";
const connectDB = async () =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

module.exports = connectDB;

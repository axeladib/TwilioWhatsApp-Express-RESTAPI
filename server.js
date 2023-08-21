//TODO: Import important global dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");



//TODO: .env file encrytion
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGO_URL;
const FRONTEND_CONNECTION = process.env.FRONTEND_CONNECTION;

//TODO: To allow only specific domain to access frontend
var corsOptions = {
  origin: FRONTEND_CONNECTION,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//TODO: intiate  middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

//TODO: intitiate routes

//TODO: Home page route where server render
app.get("/", (req, res) => {
  res.send("Twilio Application");
});

//TODO: Listen at the open port of 3000
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

//TODO: Send message to the sender


//Prevent the strictQuery in MongoDB
mongoose.set("strictQuery", false);

//TODO: Connecting to the MongoDB using Mongoose
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Successful connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.messsage);
  });

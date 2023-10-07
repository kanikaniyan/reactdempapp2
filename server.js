require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');

// const mongoose = require("mongoose");
const port = process.env.PORT || 'https://reactdemoapp2.azurewebsites.net';

const app = express();

app.use(express.json());
app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Database is connected..."))
//   .catch((err) => console.log(err));

//db schema
// const userSchema = mongoose.Schema({
//   name: String,
//   lastName: String,
// });

//db model
// const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.json({name: 'kaniyan', lastName: 'karuthavel pandian'})
});

app.post("/create", (req, res) => {
  //save to mongodb and send response
  // const newUser = new User({
  //   name: req.body.name,
  //   lastName: req.body.lastName,
  // });

  res.json({success: 'created'})
  
});

// product
app.use(express.static("client/build"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});

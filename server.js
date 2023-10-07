require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 'https://reactdemoapp2.azurewebsites.net';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({name: 'kaniyan', lastName: 'karuthavel pandian'})
});

app.listen(port, () => {
  console.log(`Server is running on post ${port}`);
});

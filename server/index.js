require('dotenv').config();
const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3006;

const Recipes = require('./database/models/model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '../client/dist'));

app.get('/hello', (req, res) => {
  console.log('Hello World');
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
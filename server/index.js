require('dotenv').config();
const path = require("path");
const express = require("express");

const app = express();
const PORT = 3005;

const Recipes = require('./database/models/model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

var searchDB = (searchTerm, filter) => {
  var result = {};
  if (filter) {
    result = {
      $and: [
        { $or: [{"title": { "$regex": searchTerm, "$options": "i"}}, {"ingredients": { "$regex": searchTerm, "$options": "i"}}, {"description": { "$regex": searchTerm, "$options": "i"}}, {"dishType": { "$regex": searchTerm, "$options": "i"}}]},
        {"symptoms": { $all: filter}}
      ]
    }
  } else {
    result = {
      $or: [ {"title": { "$regex": searchTerm, "$options": "i"}}, {"ingredients": { "$regex": searchTerm, "$options": "i"}}, {"description": { "$regex": searchTerm, "$options": "i"}}, {"dishType": { "$regex": searchTerm, "$options": "i"}}]
    }
  }

  return result;
}

app.get('/api/recipes', (req, res) => {
  Recipes.find({}).limit(10)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

// Maybe look into throttle instead of cancel
app.get('/api/recipes/search', (req, res) => {
  const searchTerm = req.query.search;
  Recipes.find(searchDB(searchTerm)).limit(10)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

app.get('/api/recipes/filter', (req, res) => {
  const searchTerm = req.query.search;
  const filter = req.query.filter.split('-');
  Recipes.find(searchDB(searchTerm, filter)).limit(10)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(400).send(err);
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
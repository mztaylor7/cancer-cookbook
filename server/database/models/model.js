const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const recipesSchema = new mongoose.Schema({
  title: String,
  dishType: String,
  symptoms: String,
  description: String,
  servings: String,
  ingredients: String,
  directions: String,
  nutrition: [{
    calories: Number,
    fat: String,
    saturatedFat: String,
    cholesterol: String,
    sodium: String,
    carbohydrate: String,
    dietaryFiber: String,
    sugars: String,
    protein: String,
    calcium: String,
    potassium: String,
  }],
  image: String,
  tip: String,
  notes: String
});

const Recipes = mongoose.model('Recipes', recipesSchema);
module.exports = Recipes;

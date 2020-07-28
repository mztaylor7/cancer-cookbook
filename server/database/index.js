const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const mongoose = require('mongoose');
var dbConnection = process.env.DB_URI;

console.log(dbConnection);

const db = mongoose.connect(dbConnection, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = db;
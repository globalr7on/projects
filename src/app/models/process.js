const mongoose = require('mongoose');

const processSchema = new mongoose.Schema({
   description: String,
});

module.exports = mongoose.model('Charge', processSchema);

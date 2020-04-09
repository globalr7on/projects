const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    Description: String,
});

module.exports = mongoose.model('Goal', goalSchema);
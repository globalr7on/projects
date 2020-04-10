const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const personSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    birthday: Date,
    phonenumber: String,
    address: String,
    gender: String,
    civilstate: String,
    city: String,
});

module.exports = mongoose.model('Person', personSchema);

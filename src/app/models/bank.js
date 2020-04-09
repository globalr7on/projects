const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    accountholder: String,
    bankaccount: String,
    iban: String,
    bankname: String,
    address: String,
    sortcode: String,
    routenumber: String,
});

module.exports = mongoose.model('Bank', bankSchema);

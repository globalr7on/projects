const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    phonenumber: String,
    address: String,
    city: String,
    province: String,
    county: String,
    postalcode: String,
    emailadress: String,
    rut: String,
});

module.exports = mongoose.model('Company', companySchema);


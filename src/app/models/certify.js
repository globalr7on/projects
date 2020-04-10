const mongoose = require('mongoose');

const certifySchema = new mongoose.Schema({

    profile: { type: Schema.ObjectId, ref: 'Profile' }

});
module.exports = mongoose.model('Certify', certifySchema);
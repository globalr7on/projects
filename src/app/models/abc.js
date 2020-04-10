const mongoose = require('mongoose');

const abcSchema = new mongoose.Schema({
    profile: { type: Schema.ObjectId, ref: 'Profile' }
});
module.exports = mongoose.model('Abc', abcSchema);
 
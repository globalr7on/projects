const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    person: {
        firstname: String,
        lastname: String,
        imgUrl: String, 
        birthday: Date,
        age: Number,
        emailadress: String,
        phonenumber: String,
        address: String,
        gender: String,
        civilstate: String,
        city: String,
        province: String,
        county: String,
        nsons: Number,
    },
    group :{
        namechurch: String,
        address2: String,
        city2:String,
        province2: String,
        country2: String,
    },
    motherChurch:{
        namechurchf: String,
        namef: String,
        namem:String, 
        phonenumberf: String,
        emailadressf: String,
        addressf: String, 
        sector:String, 
        cityf: String,
        provincef:String, 
        countryf: String,
    },
    testimony: {
        question1: String, 
        Question2: String,
        question3: String,
        question4: String,
    },   
    requestPray: {
        askpray: String,    
    }   
});


profileSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } 
    this.imgUrl = `${host}:${port}/public/${filename}`  
}



module.exports = mongoose.model('Profile', profileSchema);
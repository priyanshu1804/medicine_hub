const mongoose = require('mongoose');
const User = require('./user');
const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salt:{
        type:String
    },
    donatedBy:{
        type:String
    }
});

const Medicine = mongoose.model('medicine', medicineSchema);
module.exports = Medicine;
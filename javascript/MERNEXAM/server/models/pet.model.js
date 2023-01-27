const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Must provide pet name"],
        minlength: [3, "Name must be atleast 3 characters long"]
    },
    type : {
        type: String,
        required: [true, "Must provide pet name"],
        minlength: [3, "Type must be atleast 3 characters long"]
    },
    description : {
        type: String,
        required: [true, "Must provide pet name"],
        minlength: [3, "Description must be atleast 3 characters long"]
    },
    skill1 : {
        type: String,
        minlength: [3, "Skill 1 must be atleast 3 characters long"]
    },
    skill2 : {
        type: String,
        minlength: [3, "Skill 2 must be atleast 3 characters long"]
    },
    skill3 : {
        type: String,
        minlength: [3, "Skill 3 must be atleast 3 characters long"]
    },


}, {timestamps: true});
module.exports = mongoose.model('Pet', PetSchema)
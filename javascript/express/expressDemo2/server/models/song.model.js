const mongoose = require('mongoose')
//imports mongoose to interact with database


const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        // validation, true = required , "string warning"
        required: [true, "Title is required!"],
        // validation for character length
        minLength: [5, "Title must be atleast 5 characters long"],


    },
    artist: {
        type: String,
        // for string minLength is a built in for character length
        required: [true,"Artist is required"],
        minLength: [5, "Arist must be atleast 5 characters long"],
    },
    rating: {
        type: Number,
        // for integers min and max determine values
        min: [1, "Rating must be positive"],
        max: [10, "Max rating is 10"]
    }
}, {timestamps : true})

module.exports = mongoose.model('Song', SongSchema);
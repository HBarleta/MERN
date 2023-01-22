const mongoose = require('mongoose')
//imports mongoose to interact with database

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        // validation for character length
        // validation, true = required , "string warning"
        minLength: [5, "Title must be atleast 5 characters long"],
        // for string minLength is a built in for character length
    },
    artist: {
        type: String,
        required: [true,"Artist is required"],
        minLength: [5, "Arist must be atleast 5 characters long"],
    },
    rating: {
        type: Number,
        min: [1, "Rating must be positive"],
        max: [10, "Max rating is 10"]
    }
}, {timestamps : true})

module.exports = mongoose.model('Song', SongSchema);
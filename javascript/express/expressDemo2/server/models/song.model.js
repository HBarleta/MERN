const mongoose = require('mongoose')
//imports mongoose to interact with database

// validation, true = required , "string warning"
// validation for character length
// for string minLength is a built in for character length
const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [5, "Title must be atleast 5 characters long"],
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
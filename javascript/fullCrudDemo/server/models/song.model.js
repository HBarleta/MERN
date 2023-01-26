const mongoose = require('mongoose')

// creates a collection (database table)
const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        required : [true, "Title is required"],
        minlength : [5, "Minimum length is 5 atleast characters"],
    },
    artist: {
        type: String,
        required : [true, "Artist is required"],
        minlength: [3, "Artist name should be atleast 3 characters"]
    },
    rating: {
        type: Number,
        required: [false],
        min: [1, "Rating must be greater than 0"],
        max: [10, "Maximum rating is 10"]
    },
    top100: {
        type: Boolean,
        required: [false]
    },
}, {timestamps: true});

module.exports = mongoose.model('Song', SongSchema);
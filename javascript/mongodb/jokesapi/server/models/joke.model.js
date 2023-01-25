const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup of joke is required!"],
        minlength : [10, "Setup must be atleast 10 characters long"],

    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must be atleast 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Joke', JokeSchema);
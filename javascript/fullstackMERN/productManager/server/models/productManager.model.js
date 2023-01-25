const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A title is required"],
        minlength: [10, "Must be atleast 10 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Must give a price in dollars!"],
        min: [.01, "must be greater than 1 penny"]
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
        minlength: [10, "Description must be atleast 10 characters long!"],
        maxlength: [1000, "Cannot exceed 1000 characters!"],
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema);
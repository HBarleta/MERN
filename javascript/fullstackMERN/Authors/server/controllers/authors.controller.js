const Author = require('../models/authors.model')

module.exports.apiTest = (req, res) => {
    res.json({Status: 'Testing connection to Authors server'})
}

module.exports.addOne = (req, res) => {
    const newAuthor = req.body;
    Author.create(newAuthor)
    .then(author => res.json(author))
    .catch(error => res.status(400).json(error))
    // front end validations
}

module.exports.getAll = (req, res) => {
    Author.find()
    .then(author => res.json(author))
    .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    const authorId = req.params.id;
    Author.findOne({_id: authorId})
    .then(one => res.json(one))
    .catch(err => res.json(err))
}

module.exports.updateOne = (req, res) => {
    const authorId = req.params.id;
    // ID taken from params passed in route
    const newVals = req.body;
    // new values taken from form body
    Author.findByIdAndUpdate({_id: authorId}, newVals, {new: true})
    .then((updatedValue) => res.json(updatedValue))
    .catch(err => res.json(err))
}

module.exports.deleteOne = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}
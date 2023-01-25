const Joke = require('../models/joke.model')

module.exports.apiTest = (req, res) => {
    res.json({Connected: 'Connected to jokes API!'})
}

module.exports.addJoke = (req, res) => {
    const newJoke = req.body;
    Joke.create(newJoke)
    .then(joke => res.json(joke))
    .catch(error => res.json(error))
}

module.exports.getAll = (req, res) => {
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    const jokesId = req.params.id
    Joke.findOne({_id: jokesId})
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

module.exports.updateOne = (req, res) => {
    const jokesId = req.params.id
    const updatedJoke = req.body;
    Joke.findOneAndUpdate({_id: jokesId}, updatedJoke, {new: true})
    .then(jokeUpdated => res.json(jokeUpdated))
    .catch(err => res.json(err))
}

module.exports.deleteOne = (req, res) => {
    const jokesId = req.params.id
    Joke.deleteOne({_id: jokesId})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}




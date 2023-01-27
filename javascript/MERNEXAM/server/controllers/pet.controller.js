const Pet = require('../models/pet.model')

module.exports.apiTest = (req, res) => {
    res.json({Status: 'Testing connection to Pets server'})
}

module.exports.addOne = (req, res) => {
    const newPet = req.body;
    Pet.create(newPet)
    .then(pet => res.json(pet))
    .catch(error => res.status(400).json(error))
}

module.exports.getAll = (req, res) => {
    Pet.find()
    .then(pet => res.json(pet))
    .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    const petId = req.params.id
    Pet.findOne({_id: petId})
    .then(one => res.json(one))
    .catch( err => res.json(err))
}

module.exports.updateOne = (req, res) => {
    const petId = req.params.id
    const newVals = req.body
    Pet.findOneAndUpdate({_id: petId}, newVals, {new: true})
    .then((updatedValue) => res.json(updatedValue))
    .catch(err => res.json(err))
}

module.exports.deleteOne = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}
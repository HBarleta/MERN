const Product = require('../models/productManager.model')

module.exports.apiTest = (req, res) => {
    res.json({isConnected: "you made it to the Products server BUDDY!"})
}

module.exports.addOne = (req, res) => {
    const newProduct = req.body;
    Product.create(newProduct)
    .then(product => res.json(product))
    .catch(error => res.json(error))
}

module.exports.getAll = (req, res) => {
    Product.find()
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.getOne = (req, res) => {
    const productId = req.params.id;
    Product.findOne({_id: productId})
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.updateOne = (req, res) => {
    const productId = req.params.id;
    const newValue = req.body;
    Product.findOneAndUpdate({_id: productId}, newValue, {new:true})
    .then((updatedValue => res.json(updatedValue)))
    .catch(err => res.json(err))
}

module.exports.deleteOne = (req, res) => {
    const productId = req.params.id;
    Product.deleteOne({_id: productId})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}
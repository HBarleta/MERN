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
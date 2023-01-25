const Product = require('../models/productManager.model')

module.exports.apiTest = (req, res) => {
    res.json({isConnected: "you made it to the Products server BUDDY!"})
}
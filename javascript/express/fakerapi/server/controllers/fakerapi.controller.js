const Faker = require('../models/fakerapi.model');

module.exports.apiTest = (req, res) => {
    res.json({Status: 'Connection established'})
}
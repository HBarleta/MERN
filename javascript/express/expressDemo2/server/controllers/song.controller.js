const Song = require('../models/song.model')

module.exports.testApi = (req, res) => {
    res.json({Status: "I made capt."})
}
const Song = require('../models/song.model')

module.exports.testApi = (req, res) => {
    res.json({Status: "I made capt."})
}

// Create one

module.exports.createSong = (req, res) => {
    //req.body is all the inbound data
    const newSong = req.body
    // Song refers to database, name was created in model file
    Song.create(newSong)
    // takes res and turns it into json to pass into client side
    .then(song => res.json(song))
    //error catch
    .catch(err => res.json(err))
}

// Read all

// Read one

// Update one

// Delete one
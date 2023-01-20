const Song = require('../models/song.model')
// imports Song model file
module.exports.testApi = (req, res) => {
    res.json({Status: "I made capt."})
}

// Create one

module.exports.createSong = (req, res) => {
    Song.create(req.body)
    .then((newSong) => res.json(newSong))
    .catch(err => res.json(err))
}
//req.body is all the inbound data
// Song refers to database, name was created in model file
// takes res and turns it into json to pass into client side
//error catch

// Read all
module.exports.getAllSongs = (req, res) => {
    Song.find()
    .then((songs) => res.json(songs))
    .catch((err) => res.json(err))
};
// Read one
module.exports.getOneSong = (req, res) => {
    const idFromParams = req.params.id
    Song.findOne({_id:idFromParams})
    .then((one) => res.json(one))
    .catch((err) => res.json(err))
}
// Update one
module.exports.updateSong = (req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    Song.findOneAndUpdate({_id: idFromParams}, updatedValue, {new:true})
    .then((updatedSong) => res.json(updatedSong))
    .catch((err) => res.json(err))
}

// Delete one
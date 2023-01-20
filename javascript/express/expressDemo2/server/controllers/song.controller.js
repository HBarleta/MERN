const Song = require('../models/song.model')
// imports Song model file
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
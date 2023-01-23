const Song = require('../models/song.model')

module.exports.apiTest = (req, res) => {
    // apiTest
    res.json({Status: 'Connection established to Supersongs'})
}

// addSong
module.exports.addSong = (req, res) => {
    const newSong = req.body
    // create is a built in
    Song.create(newSong)
    .then(song => res.json(song))
    .catch(error => res.json(error))
}

// allSongs
module.exports.allSongs = (req, res) => {
    Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.json(err))
}

// oneSong
module.exports.oneSong = (req, res) => {
    const idFromSpace = req.params.id;
    Song.findOne({_id: idFromSpace})
    .then(o => res.json(o))
    .catch(err => res.json(err))
}
// updateSong

module.exports.updateSong = (req, res) => {
    const idFromSpace = req.params.id;
    const newvalue = req.body;
    Song.findOneAndUpdate({_id: idFromSpace}, newvalue, {new: true})
    .then((updatedValue => res.json(updatedValue)))
    .catch(err => res.json(err));

}

// deleteSong
module.exports.deleteSong = (req, res) => {
    Song.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}
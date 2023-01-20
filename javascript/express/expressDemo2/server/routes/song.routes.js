const SongController = require('../controllers/song.controller');
// imports SongController file

module.exports = (app) => {
    // all routes start with "/api"
    // app."" determines what protocol to use 
    app.get("/api/test", SongController.testApi)
    app.get("/api/songs", SongController.getAllSongs)
    app.post("/api/songs", SongController.createSong)
    app.get("/api/songs/:id", SongController.getOneSong)
}
const SongController = require('../controllers/song.controller');
// imports SongController file

module.exports = (app) => {
    // all routes start with "/api"
    app.get("/api/test", SongController.testApi)
    // app."" determines what protocol to use 
    app.post("/api/songs", SongController.createSong)
    app.get("/api/songs", SongController.getAllSongs)
    app.get("/api/songs/:id", SongController.getOneSong)
    
     
}
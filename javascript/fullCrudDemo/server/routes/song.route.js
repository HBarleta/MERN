const SongController = require('../controllers/song.controller')


    // refers to methods built in controller file
module.exports = (app) => {
    // test
    app.get("/api/test", SongController.apiTest);

    // create one
    app.post("/api/songs/", SongController.addSong);

    // display all
    app.get("/api/songs", SongController.allSongs);

    // display one
    app.get("/api/songs/:id", SongController.oneSong);

    // update one
    app.put("/api/song/:id", SongController.updateSong);

    // delete one
    app.delete("/api/song/:id", SongController.deleteSong);

}
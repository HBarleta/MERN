const SongController = require('../controllers/song.controller');

module.exports = (app) => {
    // all routes start with "/api"
    app.get("/api/test", SongController.testApi)
}
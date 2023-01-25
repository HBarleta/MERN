const JokesController = require('../controllers/joke.controller')

module.exports = (app) => {
    app.get("/api/test", JokesController.apiTest);

    app.post("/api/joke", JokesController.addJoke);

    app.get("/api/jokes", JokesController.getAll);

    app.get("/api/joke/:id", JokesController.getOne);

    app.put("/api/joke/:id", JokesController.updateOne);

    app.delete("/api/joke/:id", JokesController.deleteOne);
}


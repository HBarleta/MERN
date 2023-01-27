const AuthorsController = require('../controllers/authors.controller')

module.exports = (app) => {
    // testing server
    app.get('/api/test', AuthorsController.apiTest)
    app.post('/api/authors/add', AuthorsController.addOne)
    app.get('/api/authors/all', AuthorsController.getAll)
    app.get('/api/author/:id', AuthorsController.getOne)
    app.put('/api/author/:id', AuthorsController.updateOne)
    app.delete('/api/author/:id', AuthorsController.deleteOne)
}
const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.get('/api/test', PetController.apiTest)
    app.post('/api/pets/add', PetController.addOne)
    app.get('/api/pets/all', PetController.getAll)
    app.get('/api/pet/:id', PetController.getOne)
    app.put('/api/pet/:id', PetController.updateOne)
    app.delete('/api/pet/:id', PetController.deleteOne)
}
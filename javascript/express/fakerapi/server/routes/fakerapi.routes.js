const FakerController = require('../controllers/fakerapi.controller')

module.exports = (app) => {
    app.get("/api/faker/test", FakerController.apiTest)
    
}


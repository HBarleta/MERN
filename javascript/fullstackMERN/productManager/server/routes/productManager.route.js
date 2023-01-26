const ProductManagerController = require('../controllers/productManager.controller')

module.exports = (app) => {
    app.get("/api/test", ProductManagerController.apiTest);
    app.post("/api/addproduct", ProductManagerController.addOne);
}
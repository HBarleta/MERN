const ProductManagerController = require('../controllers/productManager.controller');

module.exports = (app) => {
    app.get("/api/test", ProductManagerController.apiTest);
    app.post("/api/products/add", ProductManagerController.addOne);
    app.get("/api/products/getall", ProductManagerController.getAll);
    app.get("/api/products/getone/:id", ProductManagerController.getOne);
    app.put("/api/product/updateone/:id", ProductManagerController.updateOne);
    app.delete("/api/product/deleteOne/:id", ProductManagerController.deleteOne);
}
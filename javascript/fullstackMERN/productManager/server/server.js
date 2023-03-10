const express = require('express');
const cors = require('cors')
const port = 8000;
const app = express();
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())
const Routes = require('./routes/productManager.route')
Routes(app);
app.listen(port, () => console.log(`Welcome to the Product Manager! you are on port ${port}`))

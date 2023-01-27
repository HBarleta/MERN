const express = require('express');
const cors = require('cors');
// const { default: App } = require('../../materialUI/client/src/App');
const app = express()
const port = 8000;
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const Routes = require('./routes/pet.route')
Routes(app);

app.listen(port, () => console.log(`Welcome to the Pet server! you are on port ${port}`))




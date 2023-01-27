const express = require('express')
const cors = require('cors')
const app = express();
const port = 8000;
require('./config/mongoose.config')
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

const Routes = require('./routes/authors.route')
Routes(app);

app.listen(port, () => console.log(`Welcome to the Authors server! you are on port ${port}`))
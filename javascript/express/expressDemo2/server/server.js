const express = require("express");
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// must be below app.use
require('./config/mongoose.config')
const Routes = require('./routes/song.routes')
Routes(app)
// must be below app.use
app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port : ${port}`))
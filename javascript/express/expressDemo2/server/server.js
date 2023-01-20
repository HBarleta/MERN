const express = require("express");
const app = express();
const port = 8000;

const Routes = require('./routes/song.routes')
Routes(app)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => console.log(`Welcome to the Death Star! You are on bridge port : ${port}`))
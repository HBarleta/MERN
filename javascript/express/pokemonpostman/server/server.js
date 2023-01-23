const express = require("express");
// import express and store it in a variable

const app = express();
// initialize express app and store it in a variable

const port = 8000;
// create a variable to store the desired port

app.use(express.json());
// this will invoke express and allow the app to parse the json data
app.use(express.urlencoded({extended: true}));

const Routes = require('./routes/pokemon.routes');
// this will import our routes file
Routes(app);
// backend routing that will direct the request to the routes file


// accept form information and parse it into json format
// app.get("/api", (req,res) => {
//     res.json({message : "Hello World"});
// });
// this will test postman/express server connectivity but will later be used in the controllers file

app.listen(port, () => console.log(`Welcome friend! You are on port ${port}`))
// this will utilize the port specified and with the console log what port you are on


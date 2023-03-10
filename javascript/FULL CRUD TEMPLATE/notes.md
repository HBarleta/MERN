Setting up Project:

using cmdr in the root directory:
run command npx create-react-app "projectname" with no spaces all lowercase
cd into the "projectname" folder
create a client and server folder and move all current files into client

SETTING UP CLIENT SIDE
cd into client
run command npm install react-bootstrap bootstrap
run command npm install axios (for api calls)
run command npm install react-router-dom (for client side routing)

inside the src folder, create a folder "components" (used to store components)
inside index.js import the following

import {BrowserRouter} from 'react-router-dom'
then wrap the app tag as shown:
<BrowserRouter>
<App />
</BrowserRouter>
\*\*\* this can also be wrapped and imported inside the App.js file
inside App.js file import the following

import 'bootstrap/dist/css/bootstrap.min.css' (for bootstrap styling)
import {Routes, Route} from 'react-router-dom' (for client side routing)

Route and Routes are used in this pattern:
<Routes>
<Route path="/thispath" element={<component />}></Route>
</Routes>

SETTING UP SERVER SIDE
cd into server

run command npm install express (for backend)
run command npm init -y (this will create the react app, -y will answer yes to all questions)
run command npm install mongoose (This is an object modeling tool for MongoDB)
run command npm install cors (for backend/front end connections)

create a server.js file inside server folder
inside server.js create the following variables in this exact order

---

const express = require("express");
// import express and store it in a variable

const app = express();
// initialize express app and store it in a variable

const port = 8000;
// create a variable to store the desired port

app.use(express.json());
// this will invoke express and allow the app to parse the json data

app.use(express.urlencoded({extended: true}));
// accept form information and parse it into json format

const Routes = require('./routes/pokemon.routes');
// this will import our routes file

Routes(app);
// backend routing that will direct the request to the routes file

app.get("/api", (req,res) => {
res.json({message : "Hello World"});
});
// you can use this to test connectivity of postman to express server
// this will be used later in the routes/controllers/models folders
// postman get request should display message : "Hello World" in JSON format

app.listen(port, () => console.log(`You are on port ${port}`))
// this will utilize the port specified and with the console log what port you are on

---

create a routes, controllers, models folder inside server folder
when creating routes,controller,config and model files use the patter:
"name"(singular)."routes".js
ex: pokemon.routes.js
pokemon.controllers.js
pokemon.models.js
create mongoose.config.js file inside config folder
inside mongoose.config.js file import mongoose
const mongoose = require('mongoose)

start server by running command
nodemon server.js

POSTMAN
inside postman make sure url is : http://localhost:8000/api/
api is always used when requesting from express server

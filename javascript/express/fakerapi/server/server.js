const express = require('express');

const app = express();

const port = 8000;

const faker = require('@faker-js/faker')



app.use(express.json());

app.use(express.urlencoded({extended : true}));

const Routes = require('./routes/fakerapi.routes');

Routes(app);


app.listen(port, () => console.log(`Welcome friend! you are on port ${port}`));
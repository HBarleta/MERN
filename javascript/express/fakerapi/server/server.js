const express = require('express');

const app = express();

const port = 8000;

app.use(express.json());

app.use(express.urlencoded({extended : true}));

const Routes = require('./routes/fakerapi.routes');

Routes(app);

app.get("/api", (req,res) => {
    res.json({message: "Hello there! welcome to faker API"});
});

app.listen(port, () => console.log(`Welcome friend! you are on port ${port}`));
const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// insert routes here
// const Routes = require('./routes/"filename"')
// Routes(app);

app.listen(port, () => console.log(`Welcome friend, you are on port ${port}`));
const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config')

// this will point to routes file for server requests
const Routes = require('./routes/song.route')
Routes(app);

app.listen(port, () => console.log(`Welcome friend, you are on port ${port}`));
const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

// this will point to routes file for server requests
const Routes = require('./routes/song.route')
Routes(app);

app.listen(port, () => console.log(`Welcome friend, you are on port ${port}`));
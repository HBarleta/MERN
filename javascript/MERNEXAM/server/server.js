const express = require('express');
const cors = require('cors');
const { default: App } = require('../../materialUI/client/src/App');
const port = 8000;
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// const Routes = require('')
// Routes(app);

app.listen(port, () => console.log(`Welcome to the MERN exam server! you are on port ${port}`))




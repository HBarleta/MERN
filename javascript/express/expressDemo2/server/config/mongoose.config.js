const mongoose = require('mongoose')

const database = "songdb23"

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a DB connection to the rebel base: ${database}`))
    .catch((err) => console.log("Something went wrong", err))
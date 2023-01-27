const mongoose = require('mongoose')

const database = "petshelter"

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`You are connected to ${database} database!`))
.catch((err)=> console.log(`An error occured connecting to ${database}`, err))
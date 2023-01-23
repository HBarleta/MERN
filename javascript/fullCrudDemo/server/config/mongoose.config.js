const mongoose = require('mongoose')
// establishes a connection to database server

const database = "fullstackdemo23";
// connects to database
mongoose.set('strictQuery', true)
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established connection to Rebel network ${database}`))
.catch((error)=> console.log("You are looking at Alderaan places", error))
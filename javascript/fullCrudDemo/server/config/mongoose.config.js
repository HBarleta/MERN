const mongoose = require('mongoose')
// establishes a connection to database server

const database = "fullstackdemo23";
// connects to database
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established connection to Rebel network ${database}`))
.catch((error)=> console.log("You are looking at Alderaan places", error))
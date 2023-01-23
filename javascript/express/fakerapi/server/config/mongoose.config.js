const mongoose = require('mongoose');

const database = "fakerapi"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established connection to ${database}`))
.catch((err) => console.log("These are not the droids you are looking FOR!", err))
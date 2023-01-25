const mongoose = require('mongoose')

const database = "jokesapi"

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected to the ${database} Database!`))
.catch((err) => console.log("An error occured connecting to Database!", err))
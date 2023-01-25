const mongoose = require('mongoose');

const database = "productManager"

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected to the ${database} Database!`))
.catch((err) => console.log(`An error occured trying to connect to ${database}!!`, err))
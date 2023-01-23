const PokemonModel = require("../models/pokemon.model")

module.exports.testApi = (req, res) => {
    res.json({Status: "This is working"})
}
// the testApi function will request from the server and return the response Status : "This is working" in json format
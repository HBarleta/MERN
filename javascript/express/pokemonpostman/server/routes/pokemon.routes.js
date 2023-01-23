const { default: Pokemon } = require('../../../../React/pokemonapi/client/src/components/Pokemon');
const PokemonController = require('../controllers/pokemon.controllers')

module.exports = (app) => {
    app.get('/api/test', PokemonController.testApi);
    // app.get("/api/route") will match this route with the requested path
    // this will direct to function inside controllers file
    app.get('api/getpoke', PokemonController.getPoke)
}
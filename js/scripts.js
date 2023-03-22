let pokemonRepository = (function () {

//array of pokemon data
  let pokemonList = [
   { name: 'Bulbasaur', height: 0.7, types:['grass','poison']},
   { name: 'Squirtle', height: 0.5, types:['fire']},
   { name: 'Charmander', height: 0.6, types:'water'}
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  }

})()


pokemonList.forEach(function(pokemon) {
	document.write(pokemon.name + ' ' + 'height' + ' ' + pokemon.height);
  if(pokemon.height > 0.6) {
  	document.write(" - Wow that's big!");
  }
  document.write("<br>");
})();


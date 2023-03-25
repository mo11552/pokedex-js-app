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

  function showDetails(pokemon) {}

  function addListItem(pokemon) {}

  return {
  	add: add,

  	getAll: getAll,

  	showDetails: showDetails,

  	addListItem: addListItem
  }

})()

pokemonRepository.getAll().forEach(function(pokemon) {
	document.querySelector('ul');
	let listItem = document.createElement('li')
	let button = document.createElement('button')
	button.innerText = 'pokemon'
	button.classList.add()
	button.appendChild(listItem);
	listItem.appendChild(ul);

});


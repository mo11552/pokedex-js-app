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

  function showDetails(pokemon) {
  	console.log(pokemon);
  }

  function addListItem(pokemon) {
  	// Get ul element
  	let ul = document.querySelector("ul");
  	// create li element
  	let listItem = document.createElement("li");
  	// create button element
  	let button = document.createElement("button");
  	// set the pokemon name as the text of the button
  	button.innerText = pokemon.name;
  	// add the eventListener to the button
  	button.addEventListener("click", function () {
  	  showDetails(pokemon);
  	});
	// append the button inside the li element
	listItem.appendChild(button);
	// append the li element inside the ul
	ul.appendChild(listItem);
  }

  return {
  	add: add,

  	getAll: getAll,

  	showDetails: showDetails,

  	addListItem: addListItem
  }

})()

pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);	
});


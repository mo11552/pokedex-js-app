let pokemonRepository = (function () {

//array of pokemon data
  let pokemonList = [];

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
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

  function loadList() {
  	return fetch(apiUrl).then(function (response) {
  		return response.json();
  	}).then(function (json) {
  	  json.results.forEach(function (item) {
  	  	let pokemon = {
  	  	  name: item.name,
  	  	  detailsUrl: item.url
  	  	};
  	  	add(pokemon);
  	  });
  	}).catch(function (e) {
  		console.error(e);
  	})
  }

  return {
  	add: add,

  	getAll: getAll,
  	loadList: loadList

  	showDetails: showDetails,

  	addListItem: addListItem
  }

})()
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);	
  });
});

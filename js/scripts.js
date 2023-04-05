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
  	loadDetails(pokemon).then(function(){
  	showModal(pokemon)
  	});
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

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showModal(pokemon) {
  	pokemonRepository.loadDetails(pokemon).then(function () {

  	  let modalContainer = document.querySelector("#modal-container");
  	  modalContainer.classList.add("is-visible");
  	  let pokemonImage = document.querySelector('.pokemon-image'); //pokemon image
  	  pokemonImage.src = pokemon.imageUrl;

  	  let pokemonName = document.querySelector('.pokemon-name'); //pokemon name
  	  pokemonName.innerText = pokemon.name;

  	  let pokemonHeight = document.querySelector('.pokemon-height'); //pokemon height
  	  pokemonHeight.innerText = '>' + (pokemon.height/10) + 'm';
  	});
  }

  return {
  	add: add,
  	getAll: getAll,
  	loadList: loadList,
  	loadDetails: loadDetails,
  	showDetails: showDetails,
  	addListItem: addListItem
  }

})()
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);	
  });
});

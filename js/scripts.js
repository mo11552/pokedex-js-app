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
   let ul = document.querySelector('ul');
   // create li element
   let pokemonListElement = document.querySelector('.pokemon-list');
   let listItem = document.createElement('li');
   // create button element
   let button = document.createElement('button');
   // set the pokemon name as the text of the button
   listItem.classList.add('list-group-item');
  // list group item added to li elements
   button.classList.add('btn');
   button.classList.add('btn-primary');
   button.innerText = pokemon.name;
   button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
  // add the eventListener to the button
   button.addEventListener('click', function () {
   showDetails(pokemon);
  });
	// append the button inside the li element
	listItem.appendChild(button);
	// append the li element inside the ul
	ul.appendChild(listItem);
	pokemonListElement.appendChild(listItem);
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
  /* eslint-disable no-console */
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
      item.types = details.types.map((type) => type.type.name);
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showModal(pokemon) {

  //let modalContainer = document.querySelector("#modal-container");
  //modalContainer.classList.add("is-visible");

  let modalBody = '$'('.modal-body');

  let modalTitle = '$'('.modal-title');

  modalTitle.empty();
  modalBody.empty();

  let closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', closeModal);

  let pokemonImage = '$'('<img class="pokemon-img" src="' + pokemon.imageUrl + '" />');

  let pokemonHeight = '$'('<p>' + 'Height: ' + pokemon.height + '</p>');

  let typesElement =  '$'('<p>' + 'types : ' + pokemon.types + '</p>');

  modalTitle.append(pokemon.name);
  modalBody.append(pokemonImage);
  modalBody.append(pokemonHeight);
  modalBody.append(typesElement);
}
  

  function closeModal() {
   let modalContainer = document.querySelector('#modal-container');
   modalContainer.classList.remove('is-visible');
  }

  return {
   add: add,
   getAll: getAll,
   loadList: loadList,
   loadDetails: loadDetails,
   showDetails: showDetails,
   addListItem: addListItem,
   showModal: showModal,
   closeModal: closeModal
  };
})()
pokemonRepository.loadList().then(function() {
 pokemonRepository.getAll().forEach(function(pokemon) {
 pokemonRepository.addListItem(pokemon);	
  });
});

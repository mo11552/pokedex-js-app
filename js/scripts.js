//array of pokemon data
let pokemonList = [
{ name: 'bulbasaur', height: 0.7, types:['grass','poison']},
{ name: 'squirtle', height: 0.5, types:['fire']},
{ name: 'charmander', height: 0.6, types:'water'}
];


for (let i = 0; i < pokemonList.length; i++) {
  if(pokemonList[i].height > 0.5) {
  	document.write("Wow thats big");
  }
  document.write(pokemonList[i].name + ' ' + 'height' + ' ' + pokemonList[i].height)
}

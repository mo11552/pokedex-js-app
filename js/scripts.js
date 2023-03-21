//array of pokemon data
let pokemonList = [
{ name: 'Bulbasaur', height: 0.7, types:['grass','poison']},
{ name: 'Squirtle', height: 0.5, types:['fire']},
{ name: 'Charmander', height: 0.6, types:'water'}
];


for (let i = 0; i < pokemonList.length; i++) {
	document.write(pokemonList[i].name + ' ' + 'height' + ' ' + pokemonList[i].height)
  if(pokemonList[i].height > 0.6) {
  	document.write(" - Wow that's big!");
  }
  document.write("<br>");
}

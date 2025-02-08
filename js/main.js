function ready (callback) {
  // in case the document is already rendered
  if (document.readyState != 'loading') callback()
  // modern browsers
  else if (document.addEventListener)
    document.addEventListener('DOMContentLoaded', callback)
  // IE <= 8
  else
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState == 'complete') callback()
    })
}

// const pokemonContainer = document.getElementById('pokemon-container');

// // Fetch data from the PokéAPI
// async function fetchPokemonData(pokemonName) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const data = await response.json();
//     return data;
// }

// // Render Pokémon data on the page
// function displayPokemon(pokemon) {
//   console.log(pokemon);
//     pokemonContainer.innerHTML = `
//         <h2>${pokemon.name.toUpperCase()}</h2>
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//         <p>Height: ${pokemon.height}</p>
//         <p>Weight: ${pokemon.weight}</p>
//         <p>Base Experience: ${pokemon.base_experience}</p>
//     `;
// }

// // Get a Pokémon by name and display its data
// // fetchPokemonData('pikachu').then(pokemon => displayPokemon(pokemon));

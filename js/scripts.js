let pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
    abilities: ["chlorophyll", "overgrow"],
  },
  {
    name: "Charmander",
    height: 0.6,
    types: ["fire"],
    abilities: ["blaze", "solar-power"],
  },
  {
    name: "Rattata",
    height: 0.3,
    types: ["normal"],
    abilities: ["run-away", "hustle", "guts"],
  },
];

// // with template literals
pokemonList.forEach(function (pokemon) {
  let pokemonHeightCheck =
    pokemon.height > 0.6
      ? " <span class='highlight'>- Wow, that's big!</span>"
      : "";

  document.write(
    `<div class="card">
      <h3>${pokemon.name}</h3>
      <p>Height: ${pokemon.height}${pokemonHeightCheck}</p>
      <p>Types: ${pokemon.types.join(", ")}</p>
      <p>Abilities: ${pokemon.abilities.join(", ")}</p>
    </div>`
  );
});

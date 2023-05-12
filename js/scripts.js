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
for (let i = 0; i < pokemonList.length; i++) {
  let pokemonHeightCheck =
    pokemonList[i].height > 0.6
      ? " <span class='highlight'>- Wow, that's big!</span>"
      : "";

  document.write(
    `<div class="card">
      <h3>${pokemonList[i].name}</h3>
      <p>Height: ${pokemonList[i].height}${pokemonHeightCheck}</p>
      <p>Types: ${pokemonList[i].types.join(", ")}</p>
      <p>Abilities: ${pokemonList[i].abilities.join(", ")}</p>
    </div>`
  );
}

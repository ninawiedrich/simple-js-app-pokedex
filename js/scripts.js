let pokemonRepository = (function () {
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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    let requiredKeys = ["name", "height", "types", "abilities"];

    if (
      typeof pokemon === "object" &&
      Object.keys(pokemon).every((key) => requiredKeys.includes(key))
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Object is missing required keys");
    }
  }

  function findByName(name) {
    return pokemonList.filter(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
  }

  return { getAll, add, findByName };
})();

pokemonRepository.add({
  name: "Pikachu",
  height: 0.4,
  types: ["electric"],
});

let bulbasaur = pokemonRepository.findByName("Bulbasaur");
console.log(bulbasaur);

pokemonRepository.getAll().forEach(function (pokemon) {
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

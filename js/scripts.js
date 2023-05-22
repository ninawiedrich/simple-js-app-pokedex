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
      requiredKeys.every((key) => key in pokemon)
    ) {
      pokemonList.push(pokemon);
      return true; // Indicate that the pokemon is successfully added
    } else {
      console.log("Object is missing required keys");
      return false; // Indicate that the pokemon is not added
    }
  }

  function findByName(name) {
    return pokemonList.filter(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
  }

  function addClickListener(buttonElement, pokemon) {
    buttonElement.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-pokemon-list");

    // Add event listener to the button
    addClickListener(button, pokemon);

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return { getAll, add, findByName, addListItem };
})();

pokemonRepository.add({
  name: "Pikachu",
  height: 0.4,
  types: ["electric"],
});

let bulbasaur = pokemonRepository.findByName("Bulbasaur");
console.log(bulbasaur);

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function showLoadingMessage() {
    let loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Loading...";
    loadingMessage.id = "loading-message";

    // Adding styles
    loadingMessage.setAttribute(
      "style",
      `
        position: fixed;
        top: 50%;
        left: 50%;
        background-color: black;
        color: white;
        padding: 20px;
        font-size: 3em;
    `
    );

    document.body.appendChild(loadingMessage);
  }

  function hideLoadingMessage() {
    let loadingMessage = document.querySelector("#loading-message");
    if (loadingMessage) {
      document.body.removeChild(loadingMessage);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    let requiredKeys = ["name", "detailsUrl"];
    if (
      typeof pokemon === "object" &&
      requiredKeys.every((key) => key in pokemon)
    ) {
      pokemonList.push(pokemon);
      return true;
    } else {
      console.log("Object is missing required keys");
      return false;
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

    addClickListener(button, pokemon);

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        hideLoadingMessage();
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  return {
    getAll,
    add,
    findByName,
    addListItem,
    loadList,
    loadDetails,
    showDetails,
    showLoadingMessage,
    hideLoadingMessage,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

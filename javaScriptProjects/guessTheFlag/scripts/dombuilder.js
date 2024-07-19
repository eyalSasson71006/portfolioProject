import { countries, search, reset } from "./countries.js";

const searchInput = document.querySelector("#search");

searchInput.addEventListener("keydown", (event) => {
  reset();
  cardsDiv.innerHTML = "";
  search(event.target.value.trim());
  createCardList();
});

const cardsDiv = document.getElementById("cards");

export const createCard = (country) => {
  const card = document.createElement("div");
  card.className = "card shadow-lg m-2 col-md-3 col-sm-12";

  const cardImg = document.createElement("img");
  cardImg.className = "card-img-top mt-2 border-rounded";
  cardImg.src = country.flags.png;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerHTML = `${country.name.common} ${country.unMember ? `<img src="./images/unIcon.svg" id="un-icon" alt="un icon">` : ""}`;

  const stats = document.createElement("p");
  stats.className = "card-text";
  stats.innerHTML = `
  <b>Capital:</b> ${country.capital || "None"} <br>
  <b>Languages:</b> ${country.languages ? Object.values(country.languages).join(", ") : "None"} <br>
  <b>Continents:</b> ${country.continents.join(", ") || "None"} <br>
  <b>Population:</b> ${country.population.toLocaleString() || "None"} 
  `;

  card.appendChild(cardImg);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(stats);
  card.appendChild(cardBody);
  cardsDiv.appendChild(card);
};

export const createCardList = () => {
  for (const country of countries) {
    createCard(country);
  }
};

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

const mealCard = ({ strMealThumb, strMeal, strArea, strInstructions }) => `
  <div class="mealCard">
    <img src="${strMealThumb}" alt="Meal Picture" class="mealCard-picture" />
    <h3 class="mealCard-name">${strMeal}</h3>
    <small>${strArea}</small>
    <div class="mealCard-desc">
      <p>
        ${strInstructions}
      </p>
    </div>
  </div>
`;

const errorMessage = `<h2>Meal not found</h2>`;

const fetchMealsByName = (value) => {
	return fetch(`${API_URL}?s=${value}`).then((response) => response.json());
};

const searchMeal = () => {
	const container = document.querySelector(".js-search-results");

	document.querySelector(".js-search-form").addEventListener("submit", (e) => {
		e.preventDefault();
		container.innerHTML = "";

		const mealName = document.querySelector("#query").value;

		fetchMealsByName(mealName)
			.then(({ meals }) => {
				if (meals.length) {
					meals.forEach((meal) => {
						container.innerHTML += mealCard(meal);
					});
				} else {
					throw new Error("Meal not found");
				}
			})
			.catch((_) => {
				container.innerHTML += errorMessage;
			});
	});
};

const init = () => {
	searchMeal();
};

window.onload = init;

const currentPage = location.pathname;
const menuItems = document.querySelectorAll('header .optionsMenu a');

for (item of menuItems) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add('active');
  }
}

const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
  recipe.addEventListener('click', () => {
    const imgId = recipe.getAttribute("id");
    window.location.href = `recipes/${imgId}`;
  })
}

const details = document.querySelectorAll(".details-info");
for (let detail of details) {
  let a = detail.querySelector('a');
  a.addEventListener('click', () => {
    if (detail.querySelector('.detailsInfo').classList.contains("hidden")) {
      a.innerText = "ESCONDER";
      detail.querySelector('.detailsInfo').classList.remove("hidden");
    } else {
      a.innerText = "MOSTRAR";
      detail.querySelector('.detailsInfo').classList.add("hidden");
    }
  })
}

if (document.querySelector('.add-ingredient')) {

  function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredient");
  
  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == "") return false;

  // Deixa o valor do input vazio
  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);
  
  function addPreparation() {
    const preparation = document.querySelector("#preparation");
    const fieldContainer = document.querySelectorAll(".preparation");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparation.appendChild(newField);
  }
  
  document.querySelector(".add-preparation").addEventListener("click", addPreparation);
}





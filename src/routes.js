const express = require('express');
const routes = express.Router();

const home = require('./app/controllers/home');
const recipes = require('./app/controllers/recipes');
const chefs = require('./app/controllers/chefs');

routes.get('/', home.index);
routes.get('/about', home.about);
routes.get('/recipes', home.allRecipes);
routes.get('/recipes/:id', home.recipeDetail);
routes.get('/chefs', home.allChefs);

routes.get('/admin/recipes', recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get('/admin/recipes/:id', recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

routes.get("/admin/chefs", chefs.index);
routes.get("/admin/chefs/create", chefs.create);
routes.get("/admin/chefs/:id", chefs.show);
routes.get("/admin/chefs/:id/edit", chefs.edit);

routes.post("/admin/chefs", chefs.post);
routes.put("/admin/chefs", chefs.put);
routes.delete("/admin/chefs", chefs.delete);


module.exports = routes;
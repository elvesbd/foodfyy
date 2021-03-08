module.exports = {
  index(req, res) {
    return res.render('main/index');
  },
  
  about(req, res) {
    return res.render('main/about');
  },
  
  allRecipes(req, res) {
    return res.render('main/recipes');
  },
  
  recipeDetail(req, res) {
    return;
  },

  allChefs(req, res) {
    return res.render('main/chefs');
  }
};


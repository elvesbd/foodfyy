const { date } = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  index(req, res) {
    return res.render('adm/recipes/index');
  },
  
  create(req, res) {
    return res.render('adm/recipes/create');
  },
  
  show(req, res) {
    return;
  },
  
  edit(req, res) {
    return;
  },
  
  post(req, res) {
    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == '') {
        return res.send('Please fill all fields');
      };
    };
  
    const query = `
      INSERT INTO recipes (
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `
    const values = [
      req.body.image,
      req.body.title,
      req.body.ingredients,
      req.body.preparation,
      req.body.information,
      date(Date.now()).iso,
    ];
    
    db.query(query, values, (err, result) => {
    console.log(result);
    console.log(err);
      return;
    })
    
  },
  
  put(req, res) {
    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == '') {
        return res.send('Please fill all fields');
      };
    };

    return;
  },
  
  delete(req, res) {
    return;
  },
}


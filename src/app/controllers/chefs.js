
module.exports = {
  index(req, res) {
    return res.render('adm/chefs/index');
  },

  create(req, res) {
    return res.render('adm/chefs/create');
  },

  show(req, res) {
    return res.render('adm/chefs/show');
  },

  edit(req, res) {
    return res.render('adm/chefs/edit');
  },

  post(req, res) {
    const keys = Object.keys(req.body);
  
    for (key of keys) {
      if (req.body[key] == '') {
        return res.send('Please fill all fields');
      };
    };
  
    const query = `
      INSERT INTO chefs (
        name,
        avatar_url,
        created_at
      ) VALUES ($1, $2, $3)
      RETURNING id
    `
    const values = [
      req.body.name,
      req.body.avatar_url,
      date(Date.now()).iso,
    ];
    
    db.query(query, values, (err, result) => {
  
      return res.send(err);
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
};
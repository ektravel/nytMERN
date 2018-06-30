const db = require("../models");

//Define methods for the articleController
module.exports = {
//Find all articles in the database
 findAll: function(req, res) {
    db.Article
    .find(req.query)
    .sort({date: -1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
 },
 create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

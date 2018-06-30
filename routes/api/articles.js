const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
//query MongoDB for all saved article
  .get(articleController.findAll)
//save an article to the database
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
//delete a saved article in the database
  .delete(articleController.remove);

module.exports = router;

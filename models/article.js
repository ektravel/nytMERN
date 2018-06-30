const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Using the Schema constructor, create a new object
const ArticleSchema = new Schema({
    //Title of the stored article from nytimes.com
    title: { type: String, required: true },
    //URL of the article on nytimes.com
    url:{type: String, required: true},
    //publish date and time of the article
    date: { type: Date, default: Date.now }
});
  
//Create the Article model with mongoose
const Article = mongoose.model("Article", ArticleSchema);
  
//Export the model
module.exports = Article;
  
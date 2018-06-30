const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const Article = require("./models/article");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.use(express.static("client/build"));

app.get("/api/article", (req, res) => {
    console.log("this should be hit");
    Article.find({}).then(results => res.json(results));
 });

app.post("/api/article", (req, res) => {
    console.log(req.body);
    Article.create(req.body).then(dbArticle => {
    res.json(dbArticle);
    })
   
});


app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}`);
  });
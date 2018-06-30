import axios from "axios";
const BASEURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Gets all articles
  getArticles: function (query, startYear, endYear) {
    let queryURL = BASEURL + query + APIKEY;
    if (parseInt(startYear)) {
      queryURL += "&begin_date=" + startYear + "0101";
    }
    if (parseInt(endYear)) {
      queryURL += "&end_date=" + endYear + "0101";
    }
    console.log(queryURL);
    return axios.get(queryURL);
  },

  // Gets all saved articles
  getSavedArticles: function () {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  }
};

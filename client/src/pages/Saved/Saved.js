import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({ articles: res.data, subject: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.getSavedArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h3>Saved Articles</h3>
            {this.state.articles.map(article => (
              <li className="list-group-item list-group-item-action"
                key={article._id}
                _id={article._id}
                title={article.title}
                url={article.url}
                date={article.date}>

                {/* <p>
                                <strong> Title:  {article.headline.main} </strong>
                            </p>
                            <p>Written {article.byline.original}</p>
                            <p>Published on: {article.pub_date}</p>
                            <a href={article.web_url} target="_blank">Link: {article.web_url}</a> */}

                <div>
                  <button onClick={() => this.deleteArticle(article._id)}
                    type="button" class="btn btn-outline-dark btn-sm deleteBtn">Delete Article</button>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>

    );
  }
}

export default Saved;

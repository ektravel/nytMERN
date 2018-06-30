import React, { Component } from "react";
import API from "../../utils/API";
import "./Search.css";

class Search extends Component {
    state = {
        articles: [],
        subject: "",
        startYear: "",
        endYear: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.subject, this.state.startYear, this.state.endYear)
            .then(res => {
                this.setState({
                    articles: res.data.response.docs
                });
            }).catch(err => console.log(err))
    };

    handleArticleSave = id => {
        const article = this.state.articles.find(article => article._id === id);
        API.saveArticle(article).then(res => this.getArticles());
    };
    

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="subject">Subject</label>
                        <input
                            className="form-control"
                            value={this.state.subject}
                            onChange={this.handleInputChange}
                            name="subject"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <label for="startYear">Start Year</label>
                        <input
                            value={this.state.startYear}
                            onChange={this.handleInputChange}
                            name="startYear"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label for="endYear">End Year</label>
                        <input
                            value={this.state.endYear}
                            onChange={this.handleInputChange}
                            name="endYear"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary" onClick={this.handleFormSubmit}>Search</button>
                </form>

                <div className="resultDiv">
                    <h3 className = "resultH3">Search Results</h3>
                    {this.state.articles.map(article => (
                        <li className="list-group-item list-group-item-action" key={article._id}>
                            <p>
                                <strong> Title:  {article.headline.main} </strong>
                            </p>
                            <p>Written {article.byline.original}</p>
                            <p>Published on: {article.pub_date}</p>
                            <a href={article.web_url} target="_blank">Link: {article.web_url}</a>
                            <div>
                                <button onClick={this.handleArticleSave}
                                    type="button" class="btn btn-outline-dark btn-sm resultBtn">Save Article</button>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        );
    };
};

export default Search;
import React, { Component } from "react";
import API from "../../utils/API";
import Result from "../../components/Result";
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
        }).catch (err => console.log(err))
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
                <Result dataArray={this.state.articles}/>
            </div>
        );
    };
};

export default Search;
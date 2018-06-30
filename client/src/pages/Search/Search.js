import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Result from "../../components/Result";

class Search extends Component {
    state = {
        articles: [],
        subject: "",
        startYear: "",
        endYear: ""
    };

//           <input name="title" onChange={this.handleInputChange} value={this.state.title} id="title" />
//           <input name="body" onChange={this.handleInputChange} value={this.state.body} id="post" />
//           <button onClick={this.postBlog}>Submit</button>
//         </form>
//         <ViewBlog/>
//       </div>
//     )
//   };
// };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.subject, this.state.startYear, this.state.endYear)
        .then(data => {
            console.log(data.data.response.docs);
            this.setState({
                articles: data.data.response.docs
            });
        }).catch (err => console.log(err))
    };

    render() {
        return (
            <div>
                {/* <Nav/>
                <Jumbotron>
                <h2> Search Articles </h2>
                </Jumbotron> */}
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
import React, {Component} from "react";
import API from "../../utils/API";

class Saved extends Component {
    state = {
      articles: [],
      subject: "",
      startYear: "",
      endYear: ""
    };
  
    componentDidMount() {
      this.loadArticles();
    }
  
    loadArticles= () => {
      API.getArticles()
        .then(res =>
          this.setState({ articles: res.data, subject: "", startYear: "", endYear: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteArticle = id => {
      API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

render() {
    return ( 

    <div className="container">
        <div className="row"> 
            <div className="col-md-10">
          
            </div>
        </div>
    </div>

      );
    }
  }

export default Saved;

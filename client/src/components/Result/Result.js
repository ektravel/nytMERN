import React from "react";
import "./Result.css";

const Result = (props) => (
    <div className="resultDiv">
        <h3>Search Results</h3>
        {props.dataArray.map(article => (
            <li className="list-group-item list-group-item-action" key={article._id}>
                    <p>
                     <strong> Title:  {article.headline.main} </strong>
                    </p>
                    <p>Written {article.byline.original}</p> 
                    <p>Published on: {article.pub_date}</p>
                    <a href={article.web_url} target="_blank">Link: {article.web_url}</a>
                    <div>
                    <button onClick={this.handleFormSubmit}
                     type="submit" class="btn btn-outline-dark btn-sm">Save Article</button> 
                    </div>
            </li>
        ))}
    </div>
);

export default Result;

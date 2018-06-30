import React from "react";
import "./Result.css";

const Result = (props) => (
    <div className="resultDiv">
        <h3>Search Results</h3>
        {props.dataArray.map(article => (
            <li className="list-group-item list-group-item-action" key={article._id}>
                <a href={article.web_url} target="_blank">
                    <strong>
                       {article.headline.main} {article.byline.original}
                    </strong>
                </a>
            </li>
        ))}
    </div>
);

export default Result;

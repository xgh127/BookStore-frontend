import React from "react";
import '../css/basicBackground.css';
import {render} from "react-dom";
import Book_detail from "./book_detail";

class Title_of_subContainer extends React.Component {
    constructor(props) {
        super(props);

}
render() {
    return(
        <div className="books_query-01">
            <div></div>
            <h1>{this.props.pageTitle}</h1>
        </div>
    )
    }
}
export default Title_of_subContainer;
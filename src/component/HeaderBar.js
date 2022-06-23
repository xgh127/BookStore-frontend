import React from "react";
import '../css/basicBackground.css'
import title from "../picture/logo.png";

class HeaderBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <div className="title-box">
                <img className="title"
                     src={title}
                     alt="title"/>
                <h1>{this.props.Head}</h1>
            </div>
        )
    }
}
export default HeaderBar;
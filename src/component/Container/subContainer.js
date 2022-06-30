import React from "react";
import {Affix} from "antd";

class SubContainer extends  React.Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (

            <div className="books-box">
                {this.props.elem}
            </div>

        )
    }
}
export default SubContainer;
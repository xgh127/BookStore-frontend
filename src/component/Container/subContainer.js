import React from "react";

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
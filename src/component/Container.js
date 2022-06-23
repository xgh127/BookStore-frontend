import React from "react";
import '../css/basicBackground.css'

function SubContainer(props) {
    return null;
}

SubContainer.propTypes = {};

class Container extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="min-box">
                {this.props.SideBar}
                {this.props.Sub}
            </div>

        )
    }
}
export default Container;
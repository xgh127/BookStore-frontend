import React from "react";
import '../../css/basicBackground.css'
import {BackTop} from "antd";

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
                <BackTop/>
            </div>

        )
    }
}
export default Container;
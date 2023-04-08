import React from "react";
import '../../css/basicBackground.css'
import title from "../../assets/picture/logo.png";
import {Button} from "antd";
import {PoweroffOutlined} from "@ant-design/icons";
import {userLogout} from "../../Service/UserService";

class HeaderBar extends React.Component{
    constructor(props) {
        super(props);
    }
    doLogout =()=>
    {
        userLogout();
        window.location.href="/logoutSuccess";
        localStorage.removeItem("onlineTime");
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
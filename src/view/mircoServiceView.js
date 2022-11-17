import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import {frontURL} from "../config/BaseConfig";
import {Button, Card, Descriptions, Popconfirm} from "antd";
import { PoweroffOutlined} from '@ant-design/icons';
import {UserConst} from "../Constant/UserConst";
import {userLogout} from "../Service/UserService";
import {LogoutSuccessView} from "./Result/LogoutSuccess";
import AuthorSearchBar from "../component/SearchComponent/AuthorSearchBar";

class MircoServiceView extends React.Component{

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"其他功能"}/>
                <SideBar/>
                <SubContainer elem = {

                    <div >
                        <p>通过书名查询作者</p>
                       <AuthorSearchBar/>

                    </div>
                }>

                </SubContainer>

            </div>
        )
    }
}
let ServiceView = () =>
{
    return(
        <MircoServiceView/>
    )
}
export {ServiceView};
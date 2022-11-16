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
import SearchResultPage from "../component/SearchResult";
import BackButton from "../component/UtilButton/BackButton";

class SearchResultView extends React.Component{
    doLogout =()=>
    {
        userLogout();
        window.location.href="/logoutSuccess";
        localStorage.removeItem("onlineTime");
    }
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"全局搜索"}/>
                <SideBar/>
                <SubContainer elem = {
                    <div>

                    <SearchResultPage/>
                    </div>
                }>

                </SubContainer>

            </div>
        )
    }
}
let theSearchResult = () =>
{
    return(
        <div>

        <SearchResultView/>
    </div>
    )
}
export {theSearchResult};
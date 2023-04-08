import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import BookDetail from "../component/BookDetail/BookDetail";
import SubContainer from "../component/Container/subContainer";
import title from "../assets/picture/logo.png";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import HeaderBar from "../component/Decoration/HeaderBar";
import {Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import OrderTable from "../component/Order/OrderTable";
import MyOrder from "../component/Order/MyOrder";
import {Footer} from "antd/es/layout/layout";
function Head_img(){
    return(
        <img className="title"
             src={title}
             alt="title"/>
    ) ;
}
class OrderView extends React.Component{


    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"我的订单"}/>
                <SideBar/>
                <SubContainer elem = {
                    <div>
                        <MyOrder/>
                    </div>}/>
            </div>
        )
    }
}
export {OrderView};
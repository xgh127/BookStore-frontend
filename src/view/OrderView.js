import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import Book_detail from "../component/book_detail";
import SubContainer from "../component/Container/subContainer";
import title from "../picture/logo.png";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import HeaderBar from "../component/Decoration/HeaderBar";
import {Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import OrderTable from "../component/Order/OrderTable";
import MyOrder from "../component/Order/MyOrder";
function Head_img(){
    return(
        <img className="title"
             src={title}
             alt="title"/>
    ) ;
}
function HeadBar(props){
    return(
        <div className="title-box">
            <Head_img/>
            <h1>{props.Head}</h1>
        </div>
    );
}

const { TabPane } = Tabs;

class OrderView extends React.Component{


    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"我的订单"}/>
                <SideBar/>
                <SubContainer elem = {<MyOrder/>}/>
            </div>
        )
    }
}
let theOrder = () =>
{
    return(
        <div>
            <OrderView/>
        </div>
    )
}
export {theOrder};
import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import {frontURL} from "../../config/BaseConfig";
import {Button} from "antd";
import { PoweroffOutlined} from '@ant-design/icons';
import OrderResult from "../../component/Chart/OrderResult";

class MakeOrderSuccess extends React.Component{

    render() {
    let url = window.location.href;
    let start = url.indexOf("?");
    const orderID = url.substring(start+1);
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = {  <OrderResult orderID = {orderID}/>}/>
            </div>
        )
    }
}
let MakeOrderSuccessView = () =>
{
    return(
        <MakeOrderSuccess/>
    )
}
export {MakeOrderSuccessView};
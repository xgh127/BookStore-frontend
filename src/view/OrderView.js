import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import title from "../assets/picture/logo.png";
import HeaderBar from "../component/Decoration/HeaderBar";
import MyOrder from "../component/Order/MyOrder";

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
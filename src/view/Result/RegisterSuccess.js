import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import OrderResult from "../../component/FeedBack";
import {history} from "../../utils/history";

class RegisterSuccess extends React.Component{

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = { <OrderResult  ID = ""
                                                     status = {"success"}
                                                     title={"注册成功"}
                                                     help={"返回登录吧"}
                                                     function={()=>{history.go(-2)}}/>}/>
            </div>
        )
    }
}
let RegisterSuccessView = () =>
{
    return(
        <RegisterSuccess/>
    )
}
export {RegisterSuccessView};
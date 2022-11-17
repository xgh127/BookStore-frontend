import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import OrderResult from "../../component/UtilComponet/FeedBack";
import {history} from "../../utils/history";

class LogoutSuccess extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SubContainer elem = { <OrderResult  ID =""
                                                     status = {"success"}
                                                     title={"退出登陆成功,本次在线时长为："+localStorage.getItem("onlineTime")}
                                                     pre=""
                                                     help={"点击<继续>回到登陆页面"}
                                                     function={()=>{window.location.href="/"}}/>}/>
            </div>
        )
    }
}
let LogoutSuccessView = () =>
{
    return(
        <LogoutSuccess/>
    )
}
export {LogoutSuccessView};
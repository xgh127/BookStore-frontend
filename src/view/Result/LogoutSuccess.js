import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import FeedBack from "../../component/UtilComponet/FeedBack";

class LogoutSuccessView extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SubContainer elem = { <FeedBack  ID =""
                                                     status = {"success"}
                                                     title={"退出登陆成功,本次在线时长为："+localStorage.getItem("onlineTime")}
                                                     pre=""
                                                     help={"点击<继续>回到登陆页面"}
                                                     function={()=>{window.location.href="/"}}/>}/>
            </div>
        )
    }
}

export {LogoutSuccessView};
import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import {history} from "../../utils/history";
import FeedBack from "../../component/UtilComponet/FeedBack";

class RegisterSuccessView extends React.Component{

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                {/*<SideBar/>*/}
                <SubContainer elem = { <FeedBack
                                                    pre={"您可以"}
                                                    ID={""}
                                                     status = {"success"}
                                                     title={"注册成功"}
                                                     help={"点击继续返回登录页面"}
                                                     function={()=>{history.go(-2)}}/>}/>
            </div>
        )
    }
}
export {RegisterSuccessView};
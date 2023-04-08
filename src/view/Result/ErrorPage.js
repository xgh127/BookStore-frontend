import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import OrderResult from "../../component/UtilComponet/FeedBack";
import {history} from "../../utils/history";

class ErrorPageView extends React.Component{

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = { <OrderResult
                    ID = {""}
                    status = {"error"}
                    title={"操作出错了!"}
                    pre={""}
                    help={"点击返回"}
                    function={()=>{history.go(-1)}}
                />}/>
            </div>
        )
    }
}

export {ErrorPageView};
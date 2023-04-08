import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import {history} from "../../utils/history";
import FeedBack from "../../component/UtilComponet/FeedBack";

class PublishBookSuccessView extends React.Component{

    render() {
        let url = window.location.href;
        let start = url.indexOf("?");
        const orderID = url.substring(start+1);
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = { <FeedBack  ID = {orderID}
                                                     status = {"success"}
                                                     title={"发布书籍成功！"}
                                                     pre={"书籍ID:"}
                                                     help={"点击<继续>返回查看"}
                                                     function={()=>{history.go(-1)}}/>}/>
            </div>
        )
    }
}

export {PublishBookSuccessView};
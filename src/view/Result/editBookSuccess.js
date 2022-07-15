import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import OrderResult from "../../component/FeedBack";
import {history} from "../../utils/history";

class EditBookSuccess extends React.Component{

    render() {
        let url = window.location.href;
        let start = url.indexOf("?");
        const orderID = url.substring(start+1);
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = { <OrderResult  ID = {orderID}
                                                     status = {"success"}
                                                     title={"修改书籍信息成功"}
                                                     pre={"书籍ID:"}
                                                     help={"点击<继续>返回查看"}
                                                     function={()=>{history.go(-2)}}/>}/>
            </div>
        )
    }
}
let EditBookSuccessView = () =>
{
    return(
        <EditBookSuccess/>
    )
}
export {EditBookSuccessView};
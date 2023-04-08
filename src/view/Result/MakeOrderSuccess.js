import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import OrderResult from "../../component/UtilComponet/FeedBack";
import {history} from "../../utils/history";
import {Modal, notification} from "antd";
import {closeWebSocket, createWebSocket} from "../../utils/WebSocket";

const reminderInfoCheck = (type, content) => {
    notification[type]({
        duration:null,
        placement:'top',
        message: '消息',
        // style: {
        //     width: 600,
        //     height:200,
        // },
        description: content,
    });
};
class MakeOrderSuccessView extends React.Component{
    // orderUUID = "";
    // socketURL = "";
    orderId = "";
    constructor() {
        super();
        let url = window.location.href;
        let start = url.indexOf("?");
        this.orderId= url.substring(start+1);
    }
    //     this.orderUUID= url.substring(start+1);
    //     if (this.orderUUID !== "")
    //     {
    //
    //         this.socketURL = "ws://localhost:8080/websocket/transfer/" + localStorage.getItem(UserConst.USERNAME);
    //         createWebSocket(this.socketURL,
    //             (info) => {
    //            // alert(info);
    //                reminderInfoCheck("success",info.data);
    //             }
    //         );
    //     }
    // } componentWillUnmount(){
    //     closeWebSocket();
    // }

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = { <OrderResult
                     ID = {this.orderId}
                    status = {"success"}
                    // title={"您已下单成功！正在生成订单......"}
                    title = {"下单成功！"}
                    pre={"订单ID:"}
                     // help={"系统将会将是否成功的消息以弹窗的形式告诉您，并附上订单号！"}
                    help={"您可以在左侧我的订单中查看订单"}
                    function={()=>{history.go(-1)}}
                />}/>
            </div>
        )
    }
}

export {MakeOrderSuccessView};
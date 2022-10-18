import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import OrderResult from "../../component/FeedBack";
import {history} from "../../utils/history";
import FeedBack from "../../component/FeedBack";
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
class MakeOrderSuccess extends React.Component{
    orderUUID = "";
    socketURL = "";
    constructor() {
        super();
        let url = window.location.href;
        let start = url.indexOf("?");
        this.orderUUID= url.substring(start+1);
        if (this.orderUUID !== "")
        {

            this.socketURL = "ws://localhost:8080/websocket/transfer/" + this.orderUUID;
            createWebSocket(this.socketURL,
                (info) => {
               // alert(info);
                   reminderInfoCheck("success",info.data);
                }
            );
        }
    } componentWillUnmount(){
        closeWebSocket();
    }

    render() {


        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = { <OrderResult
                    ID = {this.orderUUID}
                    status = {"success"}
                    title={"您已下单成功！正在生成订单......"}
                    pre={"订单UUID:"}
                    help={"系统将会将是否成功的消息以弹窗的形式告诉您，并附上订单号！"}
                    function={()=>{history.go(-1)}}
                />}/>
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
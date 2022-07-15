import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import OrderResult from "../../component/FeedBack";
import {history} from "../../utils/history";

class MakeOrderSuccess extends React.Component{

    render() {
    let url = window.location.href;
    let start = url.indexOf("?");
    const orderID = url.substring(start+1);
        return(
            <div className="min-box">
                <HeaderBar Head={"反馈"}/>
                <SideBar/>
                <SubContainer elem = { <OrderResult
                    ID = {orderID}
                    status = {"success"}
                    title={"生成订单，完成支付成功"}
                    pre={"订单编号:"}
                    help={"  您可前往<我的订单>中查看"}
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
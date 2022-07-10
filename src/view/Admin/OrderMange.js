import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import AdminSideBar from "../../component/Decoration/AdminSideBar";
import UserManage from "./UserMange";
import AdminOrder from "../../component/Order/AdminOrder";

class OrderMangeView extends React.Component{
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"订单管理"}/>
                <AdminSideBar/>
                <SubContainer elem = {  <AdminOrder/>}/>
            </div>
        )
    }
}
let OrderMangePage = () =>
{
    return(
        <OrderMangeView/>
    )
}
export {OrderMangePage};
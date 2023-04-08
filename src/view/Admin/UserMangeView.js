import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import AdminSideBar from "../../component/Decoration/AdminSideBar";
import UserManage from "../../component/ManageTable/UserMange";
import {Footer} from "antd/es/layout/layout";

class UserMangeView extends React.Component{
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"用户管理"}/>
                <AdminSideBar/>
                <SubContainer elem = {  <UserManage/>}/>
            </div>
        )
    }
}

export {UserMangeView};
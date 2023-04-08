import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import AdminSideBar from "../../component/Decoration/AdminSideBar";
import UserManage from "../../component/ManageTable/UserMange";
import EditBook from "./EditBook";
import {Footer} from "antd/es/layout/layout";

class EditBookView extends React.Component{
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"编辑书籍信息"}/>
                <AdminSideBar/>
                <SubContainer elem = {  <EditBook/>}/>
            </div>
        )
    }
}

export {EditBookView};
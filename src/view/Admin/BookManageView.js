import React from "react";
import '../../css/basicBackground.css'
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import AdminSideBar from "../../component/Decoration/AdminSideBar";
import BookManage from "../../component/ManageTable/BookManage";
import {Footer} from "antd/es/layout/layout";

class BookMangeView extends React.Component{
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"书籍管理"}/>
                <AdminSideBar/>
                <SubContainer elem = {  <BookManage/>}/>
            </div>
        )
    }
}

export {BookMangeView};
import React from "react";
import '../../css/basicBackground.css'
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import AdminSideBar from "../../component/Decoration/AdminSideBar";
import EditBook from "./EditBook";

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
import React from "react";
import '../../css/basicBackground.css'
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import AdminSideBar from "../../component/Decoration/AdminSideBar";
import BookManage from "./BookManage";

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
let BookMangePage = () =>
{
    return(
        <BookMangeView/>
    )
}
export {BookMangePage};
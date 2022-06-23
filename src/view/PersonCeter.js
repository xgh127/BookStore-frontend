import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/sideBar";
import Book_detail from "../component/book_detail";
import SubContainer from "../component/subContainer";
import title from "../picture/logo.png";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import HeaderBar from "../component/HeaderBar";
function Head_img(){
    return(
        <img className="title"
             src={title}
             alt="title"/>
    ) ;
}
function HeadBar(props){
    return(
        <div className="title-box">
            <Head_img/>
            <h1>{props.Head}</h1>
        </div>
    );
}

class PersonCeterView extends React.Component{


    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"个人中心"}/>
                <SideBar/>
                <SubContainer elem = {this.bookDetail()}/>
            </div>
        )
    }
}
let thePersonCenter = () =>
{
    return(
        <PersonCeterView/>
    )
}
export {thePersonCenter};
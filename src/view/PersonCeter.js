import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/sideBar";
import SubContainer from "../component/subContainer";
import HeaderBar from "../component/HeaderBar";

class PersonCeterView extends React.Component{


    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"个人中心"}/>
                <SideBar/>
                <SubContainer elem = {"目前啥也没有"}/>
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
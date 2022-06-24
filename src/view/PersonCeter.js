import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/sideBar";
import SubContainer from "../component/subContainer";
import HeaderBar from "../component/HeaderBar";
import {frontURL} from "../config/BaseConfig";

class PersonCeterView extends React.Component{
doLogOut=()=>
{
    window.location.href=frontURL+"/";
}

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"个人中心"}/>
                <SideBar/>
                <SubContainer elem = {  <button onClick={this.doLogOut}>退出登陆</button>}/>

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
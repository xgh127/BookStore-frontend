import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import {frontURL} from "../config/BaseConfig";
import {Button} from "antd";
import { PoweroffOutlined} from '@ant-design/icons';

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
                <SubContainer elem = {  <Button icon={<PoweroffOutlined />} danger onClick={this.doLogOut}>退出登陆</Button>}/>

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
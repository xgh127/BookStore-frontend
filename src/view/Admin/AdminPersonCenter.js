import React from "react";
import '../../css/basicBackground.css'
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import {frontURL} from "../../config/BaseConfig";
import {Button} from "antd";
import { PoweroffOutlined} from '@ant-design/icons';
import AdminSideBar from "../../component/Decoration/AdminSideBar";

class AdminPersonCeterView extends React.Component{
    doLogOut=()=>
    {
        window.location.href=frontURL+"/";
    }

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"管理员中心"}/>
                <AdminSideBar/>
                <SubContainer elem = {  <Button icon={<PoweroffOutlined />} danger onClick={this.doLogOut}>退出登陆</Button>}/>

            </div>
        )
    }
}
let theAdminPersonCenter = () =>
{
    return(
        <AdminPersonCeterView/>
    )
}
export {theAdminPersonCenter};
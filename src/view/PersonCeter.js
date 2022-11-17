import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import {frontURL} from "../config/BaseConfig";
import {Button, Card, Descriptions, Popconfirm} from "antd";
import { PoweroffOutlined} from '@ant-design/icons';
import {UserConst} from "../Constant/UserConst";
import {userLogout} from "../Service/UserService";
import {LogoutSuccessView} from "./Result/LogoutSuccess";
import AuthorSearchBar from "../component/SearchComponent/AuthorSearchBar";

class PersonCenterView extends React.Component{
    doLogout =()=>
    {
        userLogout();
        window.location.href="/logoutSuccess";
        localStorage.removeItem("onlineTime");
    }
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"个人中心"}/>
                <SideBar/>
                <SubContainer elem = {

                        <div >
                            <Descriptions title={"用户信息"} >
                                <Descriptions.Item label="用户名" span={6}>{localStorage.getItem(UserConst.USERNAME)}</Descriptions.Item>
                                <Descriptions.Item label="昵称" span={5}>{localStorage.getItem(UserConst.NICKNAME)}</Descriptions.Item>
                                <Descriptions.Item label="电话" span={5}>{localStorage.getItem(UserConst.TEL)}</Descriptions.Item>
                                <Descriptions.Item label="邮箱" span={5} ><b>{localStorage.getItem(UserConst.MAIL)}</b></Descriptions.Item>
                                <Descriptions.Item label= "简介"  >{localStorage.getItem(UserConst.DESCRIPTION)}</Descriptions.Item>

                            </Descriptions>
                            <Button icon={<PoweroffOutlined/>} danger onClick={this.doLogout}>退出登陆</Button><br/>

                    </div>
                }>

                </SubContainer>

            </div>
        )
    }
}
let thePersonCenter = () =>
{
    return(
        <PersonCenterView/>
    )
}
export {thePersonCenter};
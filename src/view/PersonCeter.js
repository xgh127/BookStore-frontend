import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import {Button, Descriptions, Popconfirm} from "antd";
import { PoweroffOutlined} from '@ant-design/icons';
import {UserConst} from "../Constant/UserConst";
import {doLogout} from "../Service/UserService";

class PersonCenterView extends React.Component{

        render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"个人中心"}/>
                <SideBar/>
                <SubContainer elem = {
                        <div >
                            <Descriptions title={"用户信息"} layout={"vertical"} bordered>
                                <Descriptions.Item label="用户名" span={6}><b>{localStorage.getItem(UserConst.USERNAME)}</b></Descriptions.Item>
                                <Descriptions.Item label="昵称" span={5}><b>{localStorage.getItem(UserConst.NICKNAME)}</b></Descriptions.Item>
                                <Descriptions.Item label="电话" span={5}><b>{localStorage.getItem(UserConst.TEL)}</b></Descriptions.Item>
                                <Descriptions.Item label="邮箱" span={5} ><b>{localStorage.getItem(UserConst.MAIL)}</b></Descriptions.Item>
                                <Descriptions.Item label= "简介"  ><b>{localStorage.getItem(UserConst.DESCRIPTION)}</b></Descriptions.Item>
                            </Descriptions>
                            <Button icon={<PoweroffOutlined/>} danger onClick={doLogout}>退出登陆</Button><br/>
                    </div>
                }>
                </SubContainer>
            </div>

        )
    }
}

export {PersonCenterView};
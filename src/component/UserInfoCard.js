import React from 'react';
import {Descriptions} from "antd";
import {UserConst} from "../Constant/UserConst";

/*展示用户信息的组件*/
export class UserInfoCard extends React.Component{
    constructor() {
        super();

        this.state = {
            username: localStorage.getItem(UserConst.USERNAME),          // 用户名
            nickname: localStorage.getItem(UserConst.NICKNAME),          // 用户昵称
            tel: localStorage.getItem(UserConst.TEL),                    // 用户电话
            mail: localStorage.getItem(UserConst.MAIL),                  // 用户邮箱
            description: localStorage.getItem(UserConst.DESCRIPTION),    // 用户简介
        }
    }
    onModify = () => {
    let callback = (response) => {

    }

    }

    render(){
        return (
        <div>
            <Descriptions title={"用户信息"} layout={"vertical"} bordered>
                <Descriptions.Item label="用户名" span={6}><b>{this.state.username}</b></Descriptions.Item>
                <Descriptions.Item label="昵称" span={5}><b>{this.state.nickname}</b></Descriptions.Item>
                <Descriptions.Item label="电话" span={5}><b>{this.state.tel}</b></Descriptions.Item>
                <Descriptions.Item label="邮箱" span={5} ><b>{this.state.mail}</b></Descriptions.Item>
                <Descriptions.Item label= "简介"  ><b>{this.state.description}</b></Descriptions.Item>
            </Descriptions>

        </div>
        )
    }
}



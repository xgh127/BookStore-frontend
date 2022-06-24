import React from "react";
import '../css/logincss.css'
import logHead from "../picture/login_head.jpeg"
import axios from "axios"
import {apiURL, frontURL} from "../config/BaseConfig";
import HeaderBar from "../component/HeaderBar";
import {Link} from "react-router-dom";
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

function Head_img(){//
    return(
        <div className="min-box">
            <img width="200px" src={logHead} alt="头像"/>
        </div>
    ) ;
}
class LoginView extends React.Component{
    constructor(props) {
        super(props);
        /*申请两个state*/
        this.state ={
            username:"",
            password:""
        }
    }

    InfoSet = (e,key) =>
    {
        let userInfo = {};
        userInfo[key] = e.target.value;
        this.setState(userInfo);
    }
    doRegister = e =>
    {

    }
    doLogin = e =>
    {
        e.preventDefault();
        let user = document.getElementById("username").value;
        let pwd =  document.getElementById("password").value;
        if(user == null || pwd == null || user === "" || pwd === "")
        {
            alert("Mistake!")
        }
        else {

            localStorage.setItem("username",user);
            localStorage.setItem("password",pwd);
            /*向后端的这个controller发送请求，获取后端的return*/
            axios.post(apiURL+"/loginCheck", {
                user_id :- 1,
                username:user,
                password:pwd,
                user_type:-1
            })
                .then(response => {
                if (response.data.username != null) {
                    alert("验证成功");
                    window.location.href=frontURL+"/first";//跳转到主页
                } else {
                    console.log("failed");
                    alert("对不起，验证失败，您可能尚未注册或者用户名或密码错误");
                }
            })
        }
    }
    render()
    {
        return (
<div className="min-box">
    <HeaderBar Head={"登陆"}/>
            <div className="login-Box">

            <Head_img/>
                    <Form>

                        <Form.Item
                                        name="username"
                                        rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                        ]}
                                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
                                         type="text" id="username" placeholder="请输入用户名"

                                   value = {this.state.username}
                                   onInput={(event) =>{
                                       this.InfoSet(event,'username')
                                   }} //如果输入的username改变了应该咋办
                            />

                                        </Form.Item>
                        <Form.Item
                                        name="password"
                                        rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                        ]}
                                        >
                                        <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="请输入密码"
                                        onInput={(event) =>{
                                            this.InfoSet(event,'password')
                                        }}
                                        />
                                        </Form.Item>
                        <Button  type="primary"
                                 htmlType="submit"
                                 onClick={this.doLogin}> 登录 </Button><br/>
                        <span>没有账号？</span><br/>
                        <Button ><Link to ="/register">前往注册</Link></Button>
                    </Form>
            </div>
    </div>

        )
    }
}

/*直接在这儿输出登陆页面*/
const loginPage=()=>{
    return(
        <LoginView/>
    )

}
export {LoginView,loginPage};

import React from "react";
import '../css/logincss.css'
import logHead from "../picture/login_head.jpeg"
import HeaderBar from "../component/Decoration/HeaderBar";
import {Link} from "react-router-dom";
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {formItemLayout, tailFormItemLayout} from "../assert/Format";
import {userLogin} from "../Service/UserService";

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
            userLogin({
                    username:user,
                    password:pwd,
            })
        }
    }
    render()
    {
        return (
<div className="min-box">
    <HeaderBar Head={"欢迎来到牙牙书城，请先登录吧！"}/>
            <div className="login-Box">

            <Head_img/>
                    <Form  {...formItemLayout}>

                        <Form.Item name="username" rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
                                         type="text" id="username" placeholder="请输入用户名"

                                   value = {this.state.username}
                                   onInput={(event) =>{
                                       this.InfoSet(event,'username')
                                   }} //如果输入的username改变了应该咋办
                            />

                                        </Form.Item>
                        <Form.Item name="password" rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },]}
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
                        <Form {...tailFormItemLayout}>
                        <Button  type="primary"
                                 htmlType="submit"
                                 onClick={this.doLogin}> 登录 </Button><br/>
                        <span>没有账号？</span><br/>
                        <Button ><Link to ="/register">前往注册</Link></Button>
                        </Form>
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

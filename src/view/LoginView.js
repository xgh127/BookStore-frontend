import React from "react";
import '../css/logincss.css'
import logHead from "../assets/picture/login_head.jpeg"
import HeaderBar from "../component/Decoration/HeaderBar";
import {Link} from "react-router-dom";
import {Button, Col, Form, Input, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {formItemLayout, tailFormItemLayout} from "../utils/Format";
import {doLogout, userLogin} from "../Service/UserService";
import {LoginEmpty} from "../Message/LoginMessage";
import {Footer} from "antd/es/layout/layout";
import Container from "../component/Container/Container";

/**
* 随便弄的一个头像
* */
// function Head_img(){
//     return(
//         <div className="min-box">
//             <img width="200px" src={logHead} alt="头像"/>
//         </div>
//     ) ;
// }
class LoginView extends React.Component{
    constructor(props) {
        super(props);
        /**申请两个state*/
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
   handleKeyDown=(e)=> {
        if (e.keyCode === 13) { // 判断是否按下回车键
            this.doLogin(); // 调用相应的函数
        }
    }
    doLogin = e =>
    {
        e.preventDefault();
        // e.stopPropagation()
        //获取用户名和密码
        let user = document.getElementById("username").value;
        let pwd =  document.getElementById("password").value;
        //判断是否为空
        if(user == null || pwd == null || user === "" || pwd === "")
        {
            LoginEmpty();
        }
        else {
            //调用service
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
                {/*登陆表单，来自ant design*/}
                    <Form  {...formItemLayout}>
                    <Row>
                        <Col span={24} >
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
                        </Col>
                    </Row>
                        <Row>
                            <Col span={12}  offset={2} >
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={this.doLogin}
                           > 登录 </Button><br/>
                            </div>
                            </Col>

                    <Col span={12}  offset={2}>
                        <br/>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                     <Button ><Link to ="/register">注册</Link></Button>
                        </div>

                            </Col>
                    </Row>
                    </Form>

    </div>


</div>

        )
    }
}

export {LoginView};

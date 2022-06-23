import React from "react";
import '../css/logincss.css'
import logHead from "../picture/login_head.jpeg"
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import axios from "axios"
import {apiURL, frontURL} from "../config/BaseConfig";

function Head_img(){//
    return(
        <div className="min-box">
            <img width="300px" src={logHead} alt="头像"/>
        </div>
    ) ;
}
class Login extends React.Component{
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
                    alert("对不起，验证失败，您尚未注册");
                }
            })
        }
    }
    render()
    {
        return (
            <div className="login-Box">
                    <Head_img/>
                    <h3>登录</h3>
                    <form onSubmit={this.doLogin}>

                        {/*输入用户名部分*/}
                        <p>用户名</p>
                        <input type="text" id="username" placeholder="请输入用户名"
                             /*换个行以示尊敬*/
                        value = {this.state.username}
                        onInput={(event) =>{
                                this.InfoSet(event,'username')
                        }} //如果输入的username改变了应该咋办
                        />
                        {/*密码部分*/}
                        <p>密码</p>
                        <input type="password" id="password" placeholder="请输入密码"
                            /*继续尊敬*/
                        onInput={(event) =>{
                            this.InfoSet(event,'password')
                        }}
                        />
                        {/*/!*处理登录*!/<Link to = "/home">登录</Link>，注意，button设置成submit才能提交*/}
                        <button type="submit">登录</button>
                            {/*<a href="#">忘记密码</a>*/}
                    </form>
            </div>
        )
    }
}

/*直接在这儿输出登陆页面*/
const loginPage=()=>{
    return(
        <Login/>
    )

}
export {Login,loginPage};
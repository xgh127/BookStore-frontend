import {apiURL} from "../config/BaseConfig";
import {doGet, getRequest, postRequest} from "../utils/ajax";
import {UserConst} from "../Constant/UserConst";
import {LoginFailed, LoginForbid, LoginSuccessFully, LogoutSuccess} from "../Message/LoginMessage";
import {history} from "../utils/history";
import {message} from "antd";
import {useState} from "react";
// 登录成功后保存登录状态
const setAuthenticated = () => {
    console.log("setAuthenticated");
    localStorage.setItem('isAuthenticated', 'true');
};

// 登出时清除登录状态
export const clearAuthenticated = () => {
    localStorage.removeItem('isAuthenticated');
};
const clearUserInfo = ()=>{
    localStorage.removeItem(UserConst.USERID);
    localStorage.removeItem(UserConst.USERNAME);
    localStorage.removeItem(UserConst.IDENTITY);
    localStorage.removeItem(UserConst.NICKNAME);
    localStorage.removeItem(UserConst.TEL);
    localStorage.removeItem(UserConst.MAIL);
    localStorage.removeItem(UserConst.DESCRIPTION);
}

// 检查用户是否已登录
export const isAuthenticated = () => {
    console.log("isAuthenticated =="+localStorage.getItem('isAuthenticated'));
    if (localStorage.getItem('isAuthenticated') === null) {
        return false;
    }else
    return localStorage.getItem('isAuthenticated') === 'true';
};



const userLogin = (loginInfo)=>
{
    const url = apiURL+"/loginCheck";
    getRequest(url,loginInfo,
        (response) => {
            if (response.status === 0) {

                if(response.data.userType === 1) {
                    if(response.data.forbidenStatus === 1)
                    {
                        LoginForbid();
                    }
                    else {
                        setAuthenticated ();
                        LoginSuccessFully();//输出正确信息
                        let userInfo = response.data;
                        localStorage.setItem(UserConst.USERID,userInfo.id);
                        localStorage.setItem(UserConst.USERNAME, userInfo.username);
                        localStorage.setItem(UserConst.IDENTITY,userInfo.identity);
                        localStorage.setItem(UserConst.NICKNAME,userInfo.nickname);
                        localStorage.setItem(UserConst.TEL,userInfo.tel);
                        localStorage.setItem(UserConst.MAIL,userInfo.mail);
                        console.log("用户简介"+userInfo.description);
                        localStorage.setItem(UserConst.DESCRIPTION,userInfo.description)
                        history.push("/first");
                        history.go();

                    }
                }
                else
                {
                    history.push("/UserMange");
                    history.go();
                }
            } else {
                LoginFailed(response.msg);
            }
        });
}
/**
 * 从后端获取登陆时长
 */
const userLogout =()=>
{
    let url = apiURL+"/logout";
    getRequest(url,{},(response)=>
    {
        if (response.status === 0)
        {
            if (response.data.deltaTime !== null) {
                localStorage.setItem("onlineTime", response.data.deltaTime);
            }
            else
            {
                message.error("未得到时间！！！！！！")
            }
        }
        else
        {
            message.error("退出登陆异常");
        }
    })
    clearAuthenticated();
    clearUserInfo();

}

export const doLogout =()=> {

    userLogout();
    window.location.href = "/logoutSuccess";
    localStorage.removeItem("onlineTime");
    // history.push("/login");
    // history.go();
}
/**
 * 获取所有的用户信息
 * @param callback
 */
let getAllUserList = (callback) => {

    let getAllUserListURL = apiURL + "/getAllUser";

   getRequest(getAllUserListURL,{},callback);

}
const setUserLoginPermit = (setUserID,loginPermitState,callback) => {
    let setUserLoginPermitURL = apiURL + "/admin/setUserLoginPermit";

    let obj = {
        setUserID : setUserID,
        loginPermitState: loginPermitState,
    };
    getRequest(setUserLoginPermitURL,obj,callback);
}
const ModifyUserInfo = (obj,callback) => {
    let getUserInfoURL = apiURL + "/ModifyUserInfo";

    getRequest(getUserInfoURL,obj,callback);
}
const ModifyFrontendUserInfo = (value) => {
    localStorage.setItem(UserConst.USERNAME,value.username);
    localStorage.setItem(UserConst.NICKNAME,value.nickname);
    localStorage.setItem(UserConst.TEL,value.phone);
    localStorage.setItem(UserConst.MAIL,value.email);
    localStorage.setItem(UserConst.DESCRIPTION,value.description);
}
export {userLogout,userLogin,getAllUserList,setUserLoginPermit,ModifyUserInfo,ModifyFrontendUserInfo};
import {apiURL, frontURL} from "../config/BaseConfig";
import {getRequest, postRequest_v2} from "../utils/ajax";
import {UserConst} from "../Constant/UserConst";
import {LoginFailed, LoginForbid, LoginSuccessFully, LogoutSuccess} from "../Message/LoginMessage";
import {history} from "../utils/history";
import {message} from "antd";

const userLogin = (loginInfo)=>
{
    const url = apiURL+"/loginCheck";
    getRequest(url,loginInfo,
        (response) => {
            if (response.status === 0) {

                if(response.data.identity === 1) {
                    if(response.data.forbidenStatus === 1)
                    {
                        LoginForbid();
                    }
                    else {
                        LoginSuccessFully();//输出正确信息
                        let userInfo = response.data;
                        localStorage.setItem(UserConst.USERID,userInfo.id);
                        localStorage.setItem(UserConst.USERNAME, userInfo.username);
                        localStorage.setItem(UserConst.IDENTITY,userInfo.identity);
                        localStorage.setItem(UserConst.NICKNAME,userInfo.nickname);
                        localStorage.setItem(UserConst.TEL,userInfo.tel);
                        localStorage.setItem(UserConst.MAIL,userInfo.mail);
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
                LoginFailed();
            }
        });
}

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
}

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


export {userLogout,userLogin,getAllUserList,setUserLoginPermit};
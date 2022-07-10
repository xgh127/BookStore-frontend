import {apiURL} from "../config/BaseConfig";
import {getRequest} from "../utils/ajax";
import {UserConst} from "../Constant/UserConst";
import {LoginFailed, LoginForbid, LoginSuccessFully} from "../Message/LoginMessage";
import {history} from "../utils/history";

const userLogin = (loginInfo)=>
{
    const url = apiURL+"/loginCheck";
    getRequest(url,loginInfo,
        (response) => {
        console.log(response.username);
            if (response.username != null) {

                if(response.identity === 1) {
                    if(response.forbidenStatus === 1)
                    {
                        LoginForbid();
                    }
                    else {
                        LoginSuccessFully();//输出正确信息
                        localStorage.setItem(UserConst.USERNAME, response.username);
                        localStorage.setItem(UserConst.IDENTITY,response.identity);
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


export {userLogin,getAllUserList,setUserLoginPermit};
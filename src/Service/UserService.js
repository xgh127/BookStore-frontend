import {apiURL, frontURL} from "../config/BaseConfig";
import {getRequest} from "../utils/ajax";
import {UserConst} from "../Constant/UserConst";
import {LoginFailed, LoginSuccessFully} from "../Message/LoginMessage";
import {history} from "../utils/history";

const userLogin = (loginInfo)=>
{
    const url = apiURL+"/loginCheck";
    getRequest(url,loginInfo,
        (response) => {
        console.log(response.username);
            if (response.username != null) {

                LoginSuccessFully();//输出正确信息
                localStorage.setItem(UserConst.USERNAME, response.username);
                window.location.href=frontURL+"/first";
           // history.push("/first");

            } else {
                LoginFailed();
            }
        });
}
export {userLogin};
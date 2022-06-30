import React from "react";
import {userLogin} from "../../Service/UserService";

const LocalToken = {
    USERNAME:"username",
}

class LoginPassport extends  React.Component{

    static removeLocalPassport()
    {
        localStorage.removeItem(LocalToken.USERNAME);
    }
    static getUserName()
    {
        return localStorage.getItem(LocalToken.USERNAME);
    }
    static login(loginInfo, SuccessCallback, FailureCallback) {
        if(this.checkStatus() ===1){
            SuccessCallback();
        }
        else{
            userLogin(loginInfo,SuccessCallback,FailureCallback,LocalToken);
        }
    }

}
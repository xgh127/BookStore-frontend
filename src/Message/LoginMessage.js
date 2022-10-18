import {message} from "antd";

export const LoginSuccessFully=()=>
{
    message.success("验证通过！欢迎来到牙牙书城！");
}
export const  LoginFailed=() =>
{
    message.error("验证失败！请检查你的用户名或密码！");
}
export const  LoginForbid=() =>
{
    message.error("验证失败！您已被禁止登陆！如有需要，请联系管理员修改权限!");
}

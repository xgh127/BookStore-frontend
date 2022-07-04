import {getRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import {UserConst} from "../Constant/UserConst";
import {message} from "antd";

export const  deleteCartOrderByID =(id)=>
{
    let url=apiURL+"/removeCartItem";
    getRequest(url,{ cartOrderID:id},()=>{
        console.log("delete cartOneOrder by id successfully");
    })
}
export const  checkBookExistInCartByID=(id,callback) =>
{
    let url=apiURL+"/checkBookExist";
    getRequest(url,{
        username:localStorage.getItem(UserConst.USERNAME),
        bookid:id
    },callback)
}
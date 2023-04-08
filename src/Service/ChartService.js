import {getRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import {UserConst} from "../Constant/UserConst";

/**
 * 购物车的删除功能，删除某个id的书
 * @param id
 */
export const  deleteCartOrderByID =(id)=>
{
    let url=apiURL+"/removeCartItem";
    getRequest(url,{ cartOrderID:id},()=>{
        console.log("delete cartOneOrder by id successfully");
    })
}
/**
 * 检查书籍是否已经在购物车中存在了，如果存在则提示用户去购物车中提交订单
 * @param id
 * @param callback
 */
export const  checkBookExistInCartByID=(id,callback) =>
{
    let url=apiURL+"/checkBookExist";
    getRequest(url,{
        username:localStorage.getItem(UserConst.USERNAME),
        bookid:id
    },callback)
}
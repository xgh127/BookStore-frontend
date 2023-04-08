import {apiURL} from "../config/BaseConfig";
import {doGet} from "../utils/ajax";

/**
 * 获取用户的OrderItem
 * @param callback
 * @param username
 */
export const getOrderItemByUsername=(callback,username) =>{
    let url = apiURL+"/OrderItem/getOrderItemByUsername/"+username;
    doGet(url,callback);
}
/**
 * 获取所有用户的OrderItem
 * @param callback
 * @param username
 */
export const getAllOrderItem=(callback,username) =>{
    let url = apiURL+"/OrderItem/getAllOrderItem";
    doGet(url,callback);
}
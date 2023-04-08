import {apiURL, frontURL} from "../config/BaseConfig";
import {getRequest} from "../utils/ajax";
import {message} from "antd";

/**
 * 获取所有用户的订单
 * @param callback
 */
export const getAllOrder =(callback) =>{

    let url = apiURL + "/getAllOrder";
    getRequest(url,{},callback);
};
/**
 * 获取某个特定用户的订单
 * @param callback
 */
export const getUserOrder = (callback) =>{
    let username = localStorage.getItem("username");
    let url = apiURL + "/getUserOrder/"+username;
    getRequest(url,{},callback);
}
/**
 * 订单中价格的转化
 * @param data
 * @returns {*}
 * @constructor
 */
export const OrderPriceTrim=(data) =>
{
    let  actualPrice = 0;
    for (let i = 0; i < data.length; ++i) {
        actualPrice = parseInt(data[i].totalPrice) / 100;
        data[i].totalPrice = actualPrice.toFixed(2);
    }
    return data;
}
/**
 * OrderItem中价格的转化
 * @param data
 * @returns {*}
 * @constructor
 */
export const OrderItemPriceTrim=(data) =>
{
    let  actualPrice = 0;
    for (let i = 0; i < data.length; ++i) {
        actualPrice = parseInt(data[i].price) / 100;
        data[i].price = actualPrice.toFixed(2);
    }
    return data;
}
/**
 * 下订单的函数
 * @param orderIDGroup 购买所有书籍ID的数组
 * @param receiverName 收件人
 * @param postcode     邮政编码
 * @param phoneNumber  电话号码
 * @param totalPrice   总价
 * @param address      地址
 */
export const handleMakeOrder=(orderIDGroup,receiverName,postcode,phoneNumber,totalPrice,address) =>
{
    /**
     * 如果有必填项没有填
     */
    if(receiverName === "" || address === ""|| phoneNumber === "")
    {
        message.error("，请检查您的输入，您有必填项目未填！")
    }
    else {
        let url = apiURL + "/makeOrder";
        let obj =
            {
                username: localStorage.getItem("username"),
                receiverName: receiverName,
                postcode: postcode,
                phoneNumber: phoneNumber,
                totalPrice: totalPrice,
                CartorderIDGroup: orderIDGroup,
                address: address
            }
        let callback = (data) => {
            console.log(data);
            if (data.status >= 0) {
                window.location.href="/MakeOrderSuccessView?"+data.msg;
            }else
            {
                message.error(data.msg);
            }
        }
        getRequest(url, obj, callback);
    }

}
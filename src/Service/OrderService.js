import {apiURL, frontURL} from "../config/BaseConfig";
import {getRequest} from "../utils/ajax";
import {history} from "../utils/history";
import {message} from "antd";

export const getAllOrder =(callback) =>{

    let url = apiURL + "/getAllOrder";
    getRequest(url,{},callback);
};
export const getUserOrder = (callback) =>{
    let username = localStorage.getItem("username");
    let url = apiURL + "/getUserOrder/"+username;
    getRequest(url,{},callback);
}
export const OrderPriceTrim=(data) =>
{
    let  actualPrice = 0;
    for (let i = 0; i < data.length; ++i) {
        actualPrice = parseInt(data[i].totalPrice) / 100;
        data[i].totalPrice = actualPrice.toFixed(2);
    }
    return data;
}
export const handleMakeOrder=(orderIDGroup,receiverName,postcode,phoneNumber,totalPrice,address) =>
{
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
                // window.location.href = "/MakeOrderSuccessView?" + data.data.uuid;
                window.location.href="/MakeOrderSuccessView";
            }else
            {
                message.error(data.msg);
            }
        }

        getRequest(url, obj, callback);
    }

}
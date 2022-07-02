import {apiURL} from "../config/BaseConfig";
import {getRequest} from "../utils/ajax";

export const getAllOrder =(callback) =>{

    let url = apiURL + "/getAllOrder";
    getRequest(url,{},callback);
};
export const getUserOrder = (callback) =>{
    let url = apiURL + "/getUserOrder";
    getRequest(url,{username:localStorage.getItem("username")},callback);
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
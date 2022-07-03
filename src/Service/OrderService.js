import {apiURL, frontURL} from "../config/BaseConfig";
import {getRequest} from "../utils/ajax";
import {history} from "../utils/history";

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
export const handleMakeOrder=(orderIDGroup,receiverName,postcode,phoneNumber,totalPrice,address) =>
{
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
            let  callback=(data)=>
            {
                console.log(data);
                history.push("/MakeOrderSuccessView?"+data.msg)
                history.go(0);
            }

        getRequest(url, obj, callback);

}
export const handleOneBookOrder=(orderInfo) =>
{
    let url = apiURL + "/makeOneBookOrder";
    let  callback=(data)=>
    {
        console.log(data);
        history.push("/MakeOrderSuccessView?"+data.msg)
        history.go(0);
    }
    getRequest(url, orderInfo, callback);

}
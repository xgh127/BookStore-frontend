
/*将后台传回的价格转化为含有两位小数的数字*/
import {apiURL} from "../config/BaseConfig";
import {postRequest} from "../utils/ajax";

/*
* 处理多本书的价格
* */
export const PriceTrim=(data) =>
{
    let  actualPrice = 0;
        for (let i = 0; i < data.length; ++i) {
            actualPrice = parseInt(data[i].price) / 100;
            data[i].price = actualPrice.toFixed(2);
        }
    return data;
}
/*
* 处理单本书的价格
* */
export const BookPriceTrim =(bookData)=>
{
    let actualPrice = parseInt(bookData.price)/100;
    bookData.price = actualPrice.toFixed(2);
    return bookData;
}
export function getBookByID (ID,callback)
{
    let url = apiURL+"/findOne?id="+ID;
    postRequest(url,callback);
}


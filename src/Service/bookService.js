
/*将后台传回的价格转化为含有两位小数的数字*/
import {apiURL} from "../config/BaseConfig";
import {getRequest, postRequest} from "../utils/ajax";

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

export const getAllBookList =(callback)=>
{
    let url = apiURL + "/getBooks";
    getRequest(url,{},callback);
}
export const parseBookId=(href) =>{
    /*
    *获取bookid
    */
    let bookId = "";
    for(let i = href.length-1; href[i] >='0' && href[i] <='9'; i--)
    {
        bookId += href[i];
        console.log( href[i]);
    }
    return bookId;
}

export const editOneBook = (bookInfo, callback) => {
    let url = apiURL + "/editOneBook";
    getRequest(url,bookInfo,callback);
}


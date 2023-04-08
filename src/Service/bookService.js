
/*将后台传回的价格转化为含有两位小数的数字*/
import {apiURL, frontURL} from "../config/BaseConfig";
import {doGet, getRequest, postRequest} from "../utils/ajax";

/**
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
/**
 * 处理单本书的价格
 * @param bookData
 * @returns {*}
 * @constructor
 */
export const BookPriceTrim =(bookData)=>
{
    let actualPrice = parseInt(bookData.price)/100;
    bookData.price = actualPrice.toFixed(2);
    return bookData;
}
export const JumpToDetail=(bookId)=>{
   return  window.location.href = frontURL+"/detail?id="+bookId;
}

/**
 * 通过id获取一本书的书籍信息
 * @param ID
 * @param callback
 */
export function getBookByID (ID,callback)
{
    let url = apiURL+"/findOne?id="+ID;
    postRequest(url,callback);
}

/**
 * 获取书籍列表（即所有书籍）
 * @param callback
 */
export const getAllBookList =(callback)=>
{
    let url = apiURL + "/getBooks";
    getRequest(url,{},callback);
}
/**
 * 从href解析出书籍的id
 * @param href
 * @returns {string}
 */
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
/**
 * 管理员功能：编辑书籍信息
 * @param bookInfo
 * @param callback
 */
export const editOneBook = (bookInfo, callback) => {
    let url = apiURL + "/editOneBook";
    getRequest(url,bookInfo,callback);
}
/**
 * 管理员功能：添加书籍
 * @param bookInfo
 * @param callback
 * @constructor
 */
export const AddOneBook = (bookInfo, callback) => {
    let url = apiURL + "/AddOneBook";
    getRequest(url,bookInfo,callback);
}
/**
 * 管理员功能：删除书籍
 * @param bookId
 * @param callback
 */
export const deleteOneBook = (bookId,callback) =>{
    let url = apiURL +"/deleteOneBook/"+bookId.bookID;
    doGet(url,callback);
}
/**
* 全文搜索的api，这个版本暂时不支持
 * */
export const getBookByKeyWord = (searchType, keyword, callback) => {
    let url = apiURL + "/BooksSearch/" + searchType + "/" + keyword;
    doGet(url, callback);
}


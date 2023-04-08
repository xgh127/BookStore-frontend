import {doGet, getRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";

/**
 * 管理员获取所有用户的消费数据
 * @param data 起止时间
 * @param callback
 */
export const getuserConsumeData = (data,callback) => {
    let url = apiURL + "/statistic/userConsume";
    getRequest(url,data,callback);
}
/**
 * 管理员获取书籍的销售数据
 * @param data 起止时间
 * @param callback
 */
export const getBooksSellData=(data,callback) =>{
    let url = apiURL+"/statistic/bookSell";
    getRequest(url,data,callback);
}
/**
 * 获取用户购买的书籍数量
 * @param data 起止时间
 * @param callback
 */
export const getUserbookAllBuyNum = (data,callback) => {
    let url = apiURL +"/statistic/userStatistic/bookAllBuyNum";
    getRequest(url,data,callback);
}
/**
 * 获取用户购买的书籍信息和相应的购买数量
 * @param data 起止时间
 * @param callback
 */
export const getUserbookWithBuyNum = (data,callback) => {
    let url = apiURL + "/statistic/userStatistic/bookWithBuyNum";
    getRequest(url,data,callback);
}
/**
 * 获取用户总一段时间内的消费金额
 * @param data 起止时间
 * @param callback
 */
export const getUserbookTotalPay = (data,callback) => {
    let url = apiURL + "/statistic/userStatistic/bookTotalPay";
    getRequest(url,data,callback);
}
import {gatewayURL} from "../config/BaseConfig";
import {doGet} from "../utils/ajax";

export function getAuthorByBookName (bookName,callback)
{
    let url = gatewayURL + "/author/findAuthor/"+bookName;
    doGet(url, callback);
}
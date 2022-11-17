import React from "react";

import {urlDecoder} from "../../utils/urlDecoder";
import {getBookByKeyWord} from "../../Service/bookService";
import BackButton from "../UtilComponet/BackButton";
import AuthorSearchBar from "./AuthorSearchBar";
import {getAuthorByBookName} from "../../Service/MircoService";
import {Card} from "antd";
class AuthorSearchResultPage extends React.Component{
    bookName ="";

    constructor() {
        super();
        let theRequest = urlDecoder(decodeURI(window.location.search));
        //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        this.bookName= theRequest['bookName'];
        this.state = {
            author :"",
        };

        // 抓书 如果搜索的是空白的话抓取所有的内容
        if(this.author !== ""){
            //  全文搜索 描述信息
            getAuthorByBookName(this.bookName,
                (data)=>{
                if (data !== null) {
                   // JSON.stringify(data);
                    console.log( JSON.stringify(data));
                    this.setState({
                        author :data.msg,
                    });
                }

                });
        }
    }


    render() {
        return (
            <div >
                <h>根据书名查询作者</h>
                <div >
                    <AuthorSearchBar/>
                </div>
                <div>
                    <Card><p>{"《"+this.bookName+"》"+"的作者是："}</p>
                        <p className="RedText">{this.state.author}</p>
                    </Card>
                    <BackButton/>
                </div>
            </div>
        );
    }
}

export default AuthorSearchResultPage;
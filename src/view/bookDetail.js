import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import Book_detail from "../component/book_detail";
import SubContainer from "../component/Container/subContainer";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import HeaderBar from "../component/Decoration/HeaderBar";
import {BookPriceTrim, getBookByID} from "../Service/bookService";

class BookDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            bookData: "",
        };

    }

    componentDidMount() {
        let href = window.location.href;
        /*
        *获取bookid
        */
        let bookId = "";
        for(let i = href.length-1; href[i] >='0' && href[i] <='9'; i--)
        {
            bookId += href[i];
            console.log( href[i]);
        }
        /*
        * postrequest的回调函数
        * */
        let callback=(bookData) =>
        {
            if(bookData == null)
            {
                console.log("get nothing");
            }
            else
            {
                /*这里也需要对价格进行处理*/
                this.setState({
                    bookData: BookPriceTrim(bookData)
                })
            }
        }
        bookId = bookId.split("").reverse().join("");
        getBookByID(bookId,callback);
    }
    bookDetail =() =>
    {
        if(this.state.bookData == null)
        {
            console.log("nothing you've get");
        }
        else {
            console.log("book information is"+this.state.bookData.name);
            return (

                <Book_detail product={this.state.bookData}/>
            )
        }
    }
    render() {
        return (

            <div className="min-box">
                <HeaderBar Head={"书籍详情"}/>
                <SideBar/>
                <SubContainer elem = {this.bookDetail()}/>
            </div>

        )
    }
}

let theBookDetail = () =>
{
    return(
        <BookDetail/>
    )
}
export {theBookDetail};
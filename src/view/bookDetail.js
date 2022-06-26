import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/sideBar";
import Book_detail from "../component/book_detail";
import SubContainer from "../component/subContainer";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import HeaderBar from "../component/HeaderBar";
class BookDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            bookData: "",
        };

    }

    componentDidMount() {
        let href = window.location.href;
        let bookId = "";
        for(let i = href.length-1; href[i] >='0' && href[i] <='9'; i--)
        {
            bookId += href[i];
            console.log( href[i]);
        }
        let callback=(bookData) =>
        {
            if(bookData == null)
            {
                console.log("get nothing");
            }
            else
            {
                /*这里也需要对价格进行处理*/
                let actualPrice = parseInt(bookData.price)/100;
                bookData.price = actualPrice;

                this.setState({
                    bookData: bookData
                })
            }
        }
        bookId = bookId.split("").reverse().join("");
        console.log("bookID = "+bookId);
        let url = apiURL+"/findOne?id=" + bookId.toString()+"";
        postRequest(url,callback);
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
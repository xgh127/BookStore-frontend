import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import BookDetail from "../component/BookDetail/BookDetail";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import {BookPriceTrim, getBookByID} from "../Service/bookService";
import {Footer} from "antd/es/layout/layout";
import {Layout} from "antd";

class BookDetailView extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            bookData: "",
        };

    }

    /**
     * 在渲染的时候从后端获取书籍的信息
     */
    componentDidMount() {
        //通过跳转的链接，解析传入的bookId参数
        let href = window.location.href;
        let bookId = "";
        for(let i = href.length-1; href[i] >='0' && href[i] <='9'; i--)
        {
            bookId += href[i];
            console.log( href[i]);
        }
        //从后端获取书籍信息之后的回调函数，会setState组件中的bookData，然后由BookData将书籍的详细信息渲染出来
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
        //传入bookId和回调函数，调用service中的函数从后端获取数据
        getBookByID(bookId,callback);
    }
    //然后通过下面这个函数，将获取到的信息传入BookDetail里，然后返回，最后在render里渲染出来
    bookDetail =() =>
    {
        if(this.state.bookData == null)
        {
            console.log("nothing you've get");
        }
        else {
            console.log("book information is"+this.state.bookData.name);
            return (

                <BookDetail product={this.state.bookData}/>
            )
        }
    }
    render() {
        return (
            <div className="min-box">

                <HeaderBar Head={"书籍详情"}/>
                <SideBar/>
                <SubContainer elem = {this.bookDetail()}>
                </SubContainer>
        </div>
        )
    }
}
export {BookDetailView};
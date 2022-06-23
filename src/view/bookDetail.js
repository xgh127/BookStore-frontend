import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/sideBar";
import Book_detail from "../component/book_detail";
import SubContainer from "../component/subContainer";
import title from "../picture/logo.png";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
function Head_img(){
    return(
        <img className="title"
             src={title}
             alt="title"/>
    ) ;
}
function HeadBar(props){
    return(
        <div className="title-box">
            <Head_img/>
            <h1>{props.Head}</h1>
        </div>
    );
}
const pageHead={
    Head:'首页'
}
const header=()=> <HeadBar Head={pageHead.Head}/>//页面头
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
            console.log("book information is"+this.state.bookData);
            return (

                <Book_detail product={this.state.bookData}/>
            )
        }
    }
    render() {
        return (

            <div className="min-box">
                {header()}
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
export { theBookDetail};
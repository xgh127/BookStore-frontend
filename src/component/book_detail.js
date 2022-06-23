import React from "react";
import '../css/book_detail.css'
import axios from "axios";
import {apiURL} from "../config/BaseConfig";

class Book_detail extends React.Component{


    constructor(props) {
        super(props);
    }
     addToCart=()=>
    {

        alert("确定加入购物车？");
        //发送数据到后端
       let book = this.props.product;
       let bookInfo ={
           id:book.id,
           title:book.title,
           author:book.author,
           price:book.price,
           type:book.type,
           description:book.description,
           image:book.image
       }
        if(bookInfo == null)
        {
            alert("error");
        }
        else {
            console.log("bookid = "+bookInfo.id);
            axios.post(apiURL + "/addCart", bookInfo)
                .then(response=>
                {
                console.log(response);
        })
        }
    }


    render(){
        const product = this.props.product;
        return(
            <div className="books-box">
                <div className="ghxz-02">
                    <article>
                        <img src={product.image}
                             alt={product.name}/>
                        <ul>
                            <li>书名：{product.title}</li>
                            <li>分类：{product.type}</li>
                            <li>作者：{product.author}</li>
                            <li>定价：{product.price}</li>
                            <li>简介：{product.description}</li>
                        </ul>
                    </article>
                    <button onClick={this.addToCart}>加入购物车</button>
                    <button id="btn" >购买</button>
                </div>
            </div>
        )
    }
}
export default Book_detail;
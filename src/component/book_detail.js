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

        alert("确定加入购物车？如果购物车已经存在该书籍，您的购买数量将会+1，您可以自行前往购物车查看并修改您需要的购买数量并进行修改！");
        //发送数据到后端
       let book = this.props.product;
       console.log("username"+localStorage.getItem("username"))
       let bookInfo ={
           id:book.id,
           title:book.title,
           author:book.author,
           price:book.price,
           type:book.type,
           description:book.description,
           image:book.image,
           username:localStorage.getItem("username")
       }
       if(bookInfo != null) {
           console.log("bookid = " + bookInfo.id);
           axios.post(apiURL + "/addCart", bookInfo)
               .then(response => {
                   console.log(response);
               })
       }
       else
       {
           alert("add falied")
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
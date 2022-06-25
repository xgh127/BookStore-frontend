import React from "react";
import '../css/book_detail.css'
import '../css/chart.css'
import {getRequest, postRequest, postRequest_v2} from "../utils/ajax";
import {apiURL,frontURL} from "../config/BaseConfig";
import axios from "axios";
import {Button} from "antd";

function formatPrice(price){
    if(typeof price !=="number"){
        price = Number("aaa") || 0
    }
    return "¥"+ price.toFixed(2)
}

class Movie extends React.Component{
    constructor(){
        super()
        this.state={
            books:[],
        }
    }
    componentDidMount()
    {
        //每次进入购物车就向后端读取购物车内的内容并渲染
        let callback =(data)=>
        {
            if(this.state.books == null)
            {
                console.log("get nothing from the cartorder");
            }
            else
            {
                this.setState({books:data});
                console.log("Render cart by getting data from cartorder DB successfully")
            }
        }
        let url = apiURL+'/getOrders';
        getRequest(url, {
            username:localStorage.getItem("username")
        },callback
        );//发送请求
    }
    Continue =()=>//点击继续购物的时候跳转到主页面
    {
        window.location.href=frontURL+"/first";
    }

    renderBooks(){
        return(
            <div>
                <table id= "shopping_cart_info">
                    <thead>
                    <tr>
                        <th width="100px" >序号</th>
                        <th >书籍名称</th>
                        <th width="400px" height="42px">价格</th>
                        <th width="400px" height="42px">购买数量</th>
                        <th width="400px" height="42px">操作</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.books.map((item,index)=>{
                            return (
                                <tr>
                                    <td>{item.idCartOrder}</td>
                                    <td>{item.bookName}</td>
                                    <td>￥{item.bookPrice}</td>
                                    <td>
                                        <Button shape="circle" onClick={()=>this.changeBookCount(index,-1)}
                                                disabled={item.buyNum ===1}>-</Button>
                                        <span>{item.buyNum}</span>
                                        <Button shape="circle"  onClick={()=>this.changeBookCount(index,1)}>+</Button>
                                    </td>
                                    <td><Button danger onClick={()=>this.removeItem(index)}>移除</Button></td>
                                </tr>)
                        })
                    }
                    </tbody>
                </table>
                <div className="continueorsubmit fr">
                    <Button type="button"   className="continue" onClick={ this.Continue}>继续购物</Button>
                    <Button type="submit"  className="submit">提交订单</Button>
                </div>
                <p>总价格:{this.getTotalprice()}</p>
            </div>)
    }

    renderNone(){
        return <h2>购物车为空</h2>
    }
    render() {
        const {books} = this.state
        return books.length ===0 ? this.renderNone():this.renderBooks()
    }
    changeBookCount(index,count){
        const newBooks =[...this.state.books]
        newBooks[index].buyNum +=count;
        console.log("get "+newBooks[index].bookid+" "+newBooks[index].buyNum)
        axios.post(apiURL+"/changeBuyNum",{
            bookid:newBooks[index].bookid,
            buyNum:newBooks[index].buyNum,
            username:localStorage.getItem("username")
        })
        this.setState({
            books:newBooks
        })
    }
    removeItem(index){
        let newBooks =[...this.state.books];
        axios.post(apiURL+"/removeCartItem",{
            bookid:newBooks[index].bookid,
            username:localStorage.getItem("username")
        })
            .then(response =>{
                if(response != null) {

/*我啥也没写就是玩儿aa*/
                    newBooks = response;
                    this.setState({
                        //book: newBook
                         books:this.state.books.filter((item,indey)=>index !== indey)
                    })
                    console.log("after delte"+this.state.books);
                }
                else
                {
                    console.log("get after delete failed");
                }
            })

    }

    getTotalprice(){
        let totalPrice = this.state.books.reduce((pre,item)=>{
            return pre+item.bookPrice * item.buyNum
        },0)
        return formatPrice(totalPrice)
    }
}
export default Movie;






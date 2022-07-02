import React from "react";
import '../../css/book_detail.css'
import '../../css/chart.css'
import {getRequest} from "../../utils/ajax";
import {apiURL, frontURL} from "../../config/BaseConfig";
import axios from "axios";
import {Button, Checkbox, Form, message, Popconfirm} from "antd";
import {PriceTrim} from "../../Service/bookService";
import {history} from "../../utils/history";

class Movie extends React.Component{
    constructor(){
        super()
        this.state={
            books:[],
            totalPrice:0,
            submitStatus:0,
        }
    }

    /*获取数据*/
    componentDidMount()
    {
        //每次进入购物车就向后端读取购物车内的内容并渲染
        let callback =(data)=>
        {
            if(this.state.books == null)
            {
                console.log("Render cart by getting data from cartorder DB failed");
            }
            else
            {
                data = PriceTrim(data);
                this.setState({books:data});
                console.log("Render cart by getting data from cartorder DB successfully");
            }

        }
        let url = apiURL+'/getOrders';
        getRequest(url, {
            username:localStorage.getItem("username")
        },callback
        );//发送请求
    }
    /*点击继续购物*/
    Continue =()=>//点击继续购物的时候跳转到主页面
    {
        history.push("/first");
        history.go(0);
    };

    handleSubmitOrder=() =>
    {
        let orderIDGroup = [];
        let bookIDGroup = [];
        this.state.books.forEach((item)=>
        {
            if(item.submitStatus === 1) {
                orderIDGroup.push(item.idCartOrder);
            }
        })
        if(orderIDGroup.length ===0)
        {
            message.warn("您未选择任何一项")
        }
        else {
            let url = apiURL + "/makeOrder";
            let obj =
                {
                    username: localStorage.getItem("username"),
                    receiverName: "徐国洪",
                    postcode: "40400",
                    phoneNumber: "18290207267",
                    totalPrice: this.getTotalprice(),
                    CartorderIDGroup: orderIDGroup,
                    address: "东川路800号"
                }
            getRequest(url, obj, () => {
                console.log("make an order");
            });
            window.location.reload();
        }
    }

    renderBooks(){

        return(
            <div>
                <Form id= "shopping_cart_info">
                    <thead>
                    <tr>
                        <td  className="displaysmall">选择</td>
                        <th className="displaysmall" >序号</th>
                        <th className="displaybig">书籍名称</th>
                        <th className="displaybig">价格</th>
                        <th className="displaybig">购买数量</th>
                        <th width="400px" height="42px">操作</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.books.map((item,index)=>{
                            return (
                                <tr>
                                    <td ><Checkbox  onChange={(e)=>
                                    {
                                        const newBooks =[...this.state.books];
                                        if(e.target.checked === true) {
                                            this.changeBookStatus(index, 1);
                                            newBooks[index].submitStatus = 1;
                                        }
                                        else
                                        {
                                            this.changeBookStatus(index,0);
                                            newBooks[index].submitStatus = 0;
                                        }
                                        console.log(JSON.stringify(newBooks));
                                        this.setState({books:newBooks});
                                        let total = this.getTotalprice();
                                        this.setState({totalPrice:total});

                                    }}/></td>
                                    <td>{item.idCartOrder}</td>
                                    <td><a  onClick={()=>{window.location.href=frontURL+"/detail?id="+item.bookid}}>{item.bookName}</a></td>
                                    <td>￥{item.price}</td>
                                    <td>
                                        <Button shape="circle" onClick={()=>this.changeBookCount(index,-1)}
                                                disabled={item.buyNum ===1}>-</Button>
                                        <span >x{item.buyNum}</span>
                                        <Button shape="circle"  onClick={()=>this.changeBookCount(index,1)}>+</Button>
                                    </td>
                                    <td>
                                        <Popconfirm
                                            title="你确定要移除这本书吗?"
                                          onConfirm={() =>
                                          {
                                              this.removeItem(index);
                                              message.success("移除成功")
                                              window.location.reload();
                                          }}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Button danger >移除</Button>
                                        </Popconfirm>
                                        <Button type="link" onClick={()=>{window.location.href=frontURL+"/detail?id="+item.bookid}}>详情</Button>

                                </td>
                                </tr>)
                        })
                    }
                    </tbody>
                </Form>
                <div className="continueorsubmit fr">
                    <Button type="button"   className="continue" onClick={ this.Continue}>继续购物</Button>
                    <Button type="submit"  className="submit" onClick={this.handleSubmitOrder}>提交订单</Button>
                </div>
                <p>已选书籍总价格:{this.state.totalPrice.toFixed(2)}元</p>
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
            cartOrderID:newBooks[index].idCartOrder,
            buyNum:newBooks[index].buyNum,
        })
        this.setState({
            books:newBooks,totalPrice:this.getTotalprice()
        })
    }
    changeBookStatus(index,type){
        const newBooks =[...this.state.books]
        newBooks[index].submitStatus = type;
       // console.log("get "+newBooks[index].bookid+" "+newBooks[index].buyNum)
        axios.post(apiURL+"/changeStatus",{
            cartOrderID:newBooks[index].idCartOrder,
            submit_status:newBooks[index].submitStatus,
        })
        this.setState({
            books:newBooks
        })
    }
    removeItem(index){
        let newBooks =[...this.state.books];
        console.log("delete "+newBooks[index].idCartOrder+" "+newBooks[index].bookid+newBooks[index].bookName);
        axios.post(apiURL+"/removeCartItem",{
            cartOrderID:newBooks[index].idCartOrder,

        })
            .then(response =>{
                if(response != null) {
                    newBooks = response;
                    this.setState({
                         books:this.state.books.filter((item,indey)=>index !== indey)
                    })
                    this.setState({totalPrice:this.getTotalprice()})
                }
                else
                {
                    console.log("get after delete failed");
                }
            })
    }

    getTotalprice(){
        return this.state.books.reduce((pre, item) => {
           if (item.submitStatus === 1)
               return pre + item.price * item.buyNum;
           else return pre;
       }, 0);
    }
}
export default Movie;






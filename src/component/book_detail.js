import React, {useState} from "react";
import '../css/book_detail.css'
import axios from "axios";
import {apiURL, frontURL} from "../config/BaseConfig";
import {Button, Card, Col, Descriptions, Image, InputNumber, message, Modal, notification, PageHeader, Row} from "antd";
import {history} from "../utils/history";
import SubmitForm from "./Chart/OrderSumbitForm";
import {getRequest} from "../utils/ajax";
import {handleMakeOrder} from "../Service/OrderService";
import {checkBookExistByID, checkBookExistInCartByID, deleteCartOrderByID} from "../Service/ChartService";
import {UserConst} from "../Constant/UserConst";
const openNotification = (placement) => {
    notification.info({
        message: "添加成功",
        description:
            '您已成功添加该商品到购物车，点击侧边>我的购物车<可以查看',
        placement,
    });
};
class Book_detail extends React.Component{

    constructor(props) {
        super(props);
        this.state =
        {
            buyNum:1,
            allPrice:0,
            bookPrice:0,
            visible:false,
            // flag:false
        }
    }
    componentDidMount() {


    }

    /*消息确认框*/
     cartID  = 0;
    showAddConfirm = ()=>
    {
        Modal.confirm(
            {
                title: '您确定要把《'+this.props.product.name+'》加入购物车吗? ',
                content: '如果您购物车中已经有该商品，我们将会将您此次的购买数量加到购物车中的购买数量！',
                cancelText: '取消',
                okText: '确定',
                okType: 'primary',
                onOk: () => {
                    this.addToCart(1)//确认按钮的回调方法，确认后可执行加入购物车
                },
                onCancel() {
                    console.log('Cancel');
                },
            }
        )
    }
    showModal=()=>
    {
            this.setState({
                visible:true
            })
    }
    closeModal =() =>
    {
        this.setState({
            visible:false
        })
    }

    addToCart=(type)=> {//发送数据到后端
        let book = this.props.product;
        console.log("book="+book);
        checkBookExistInCartByID(book.id,(data)=> {//如果后端存在书籍
            if (parseInt(data.msg) !== -1) {
                console.log("data = " + JSON.stringify(data));
                message.info("该书籍已经在购物车中了！你可以前往购物车提交订单或修改数据！");
            }
            else {
                let bookInfo = {
                    id: book.id,
                    buyNum: this.state.buyNum,
                    title: book.name,
                    author: book.author,
                    price: book.price,
                    type: book.type,
                    description: book.description,
                    image: book.image,
                    username: localStorage.getItem("username")
                }
                let url = apiURL + "/addCart";//为了代码更好地复用，先加到购物车里面
                let callback = (data) => {
                    this.cartID = data.msg;//加入购物车成功后会返回对应的订单号
                    console.log("set cartID to" + data.msg + "from" + this.cartID);
                    if (type === 1)//如果type ===1，说明点击的是加入购物车，就需要提示加入购物车成功
                        openNotification('top');//弹出消息提示框，参数是提示出现的位置
                    let receiverName = document.getElementById("receiverName").value;
                    let postcode = document.getElementById("postcode").value;
                    let address = document.getElementById("address").value;
                    let phoneNumber = document.getElementById("phoneNumber").value;
                    if (receiverName === "" || address === "" || phoneNumber === "") {
                        deleteCartOrderByID(this.cartID);
                        message.error("，请检查您的输入，您有必填项目未填！")
                    }
                    let orderIDGroup = [];//为了代码复用所以即使就一个数据也用的数组存
                    orderIDGroup.push(this.cartID);
                    console.log("here we go" + this.cartID)
                    getRequest(apiURL + "/getCartOrderByID", {id: this.cartID}, (cartOrder) => {
                        let totalprice = ((parseInt(cartOrder.price) / 100) * cartOrder.buyNum).toFixed(2);
                           handleMakeOrder(orderIDGroup, receiverName, postcode, phoneNumber, totalprice, address)
                    })
                };
                getRequest(url, bookInfo, callback)
            }
            });
    }
       submitOneBook=()=>
       {
           this.addToCart(0);
       }
    backToHome=()=>
    {
        history.go(-1);
    }
    toNext=()=>
    {
        window.location.href=frontURL+"/detail?id=" + (this.props.product.id+1)%39 +"";
    }
    /*修改购买数量*/
    buyNumChange(e){
        this.setState({bookPrice:this.props.product.price});

        if(e!=null) {
            this.setState({buyNum: e, allPrice:this.state.bookPrice  * e})
        }
        console.log("After change "+this.state.allPrice+ " "+this.state.buyNum);
    }

    render(){
        const product = this.props.product;
        return(
            <div className="books-box">
                <Modal title="请输入订单信息" visible={this.state.visible} onOk={this.submitOneBook} onCancel={this.closeModal} okText="支付" cancelText="取消">
                    <SubmitForm/>
                </Modal>
                <div className="ghxz-02">
<div className="BookDetailTop">
                        <div className="BookDetailImg">
                            <Image width="380px" src={product.image}
                             alt={product.name}/>
                        </div>

                    <div className="BookDescription">
                            <Descriptions title={"书籍详情"} >
                                <Descriptions.Item label="书名" span={6}>{product.name}</Descriptions.Item>
                            <Descriptions.Item label="分类" span={5}>{product.type}</Descriptions.Item>
                            <Descriptions.Item label="作者" span={5}>{product.author}</Descriptions.Item>
                            <Descriptions.Item label="单价" span={5} ><b>{product.price}元</b></Descriptions.Item>
                            <Descriptions.Item label= "简介">{product.description}</Descriptions.Item>

                            </Descriptions>

                    </div>
                        <PageHeader><Button size="large" block   onClick={this.backToHome}>返回上一页</Button></PageHeader>

            </div>

                    <Card title="购买信息" size={"small"}>

                        <Row>
                            <Col>
                                    <p>购买数量：</p>
                                </Col>
                                <Col span={3}>
                                    <InputNumber id="buyNum" min={1} onChange={e => this.buyNumChange(e)} defaultValue={1}/>
                                </Col>
                            <Col span={5}><p>总价：{this.state.allPrice.toFixed(2)}元</p></Col>

                        <Col span={3}>
                    <Button onClick={ this.showAddConfirm}>加入购物车</Button>
                        </Col>
                            <Col span={3}>
                            <Button onClick={this.showModal} >直接购买</Button></Col>
                            <Col span={3}>
                                <Button onClick={this.toNext} >下一页</Button></Col>
                        </Row>

                    </Card>

                </div>
            </div>
        )
    }
}
export default Book_detail;
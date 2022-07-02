import React, {useState} from "react";
import '../css/book_detail.css'
import axios from "axios";
import {apiURL, frontURL} from "../config/BaseConfig";
import {Button, Card, Col, Descriptions, Image, InputNumber, Modal, notification, PageHeader, Row} from "antd";
import {history} from "../utils/history";
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
        }
    }
    /*消息确认框*/
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
                    this.addToCart()//确认按钮的回调方法，确认后可执行加入购物车
                },
                onCancel() {
                    console.log('Cancel');
                },
            }
        )
    }
    addToCart=()=>
    {//发送数据到后端
       let book = this.props.product;
       console.log("username"+localStorage.getItem("username"))
       let bookInfo ={
           id:book.id,
           buyNum: this.state.buyNum,
           title:book.name,
           author:book.author,
           price:book.price,
           type:book.type,
           description:book.description,
           image:book.image,
           username:localStorage.getItem("username")
       }
           console.log("bookid = " + bookInfo.id);
           axios.post(apiURL + "/addCart", bookInfo)
               .then(response => {
                   openNotification('top');//弹出消息提示框，参数是提示出现的位置
               })
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
                        <PageHeader><Button size="large" block  onClick={this.backToHome}>返回</Button></PageHeader>

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
                            <Button id="btn"  >直接购买</Button></Col>
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
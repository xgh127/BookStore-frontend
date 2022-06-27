import React from "react";
import '../css/book_detail.css'
import axios from "axios";
import {apiURL, frontURL} from "../config/BaseConfig";
import {
    BackTop,
    Button,
    Card,
    Col,
    Descriptions,
    Form,
    Image,
    InputNumber,
    PageHeader,
    Row,
    TabPaneProps,
    Tabs
} from "antd";
import Cell from "antd/es/descriptions/Cell";
class Book_detail extends React.Component{

    constructor(props) {
        const bookprice = props.product.price;
        super(props);

        this.state =
        {
            buyNum:0,
            allPrice:0,
            bookPrice:0,
        }
    }
    addToCart=()=>
    {

        alert("确定加入购物车？如果购物车已经存在该书籍，您的购买数量将会+1，您可以自行前往购物车查看并修改您需要的购买数量并进行修改！");
        //发送数据到后端
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
    backToHome=()=>
    {
        window.location.href=frontURL+"/first";
    }
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
                                <Col span={5}>
                                    <InputNumber id="buyNum" min={1} onChange={e => this.buyNumChange(e)} defaultValue={1}/>
                                </Col>
                            <Col span={8}><p>总价：{this.state.allPrice.toFixed(2)}元</p></Col>

                        <Col span={3}>
                    <Button onClick={this.addToCart}>加入购物车</Button>
                            <Button id="btn"  >购买</Button></Col>

                        </Row>

                    </Card>

                </div>
            </div>
        )
    }
}
export default Book_detail;
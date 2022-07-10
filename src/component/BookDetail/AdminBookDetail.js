import React from "react";
import '../../css/book_detail.css'
import {Button, Card, Col, Descriptions, Image, PageHeader} from "antd";
import {history} from "../../utils/history";

class AdminBookDetail extends React.Component{

    constructor(props) {
        super(props);
    }
    BackUp=()=>
    {
        history.go(-1);
    }

    render(){
        const product = this.props.product;
        return(

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
                        <PageHeader><Button size="large" block   onClick={this.BackUp}>返回上一页</Button></PageHeader>
                    </div>

            </div>
        )
    }
}
export default AdminBookDetail;
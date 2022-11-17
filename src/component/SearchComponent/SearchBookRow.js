import React from "react";
import {Button, Col, Divider, Image, Row} from "antd";
import {Link} from "react-router-dom";
class SearchBookRow extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Row>
                    <Col span={3}>
                        <Image  src={this.props.bookInfo.image}/>
                    </Col>
                    <Col span={6}>
                        <Link
                            to={'detail?id=' + this.props.bookInfo.id}
                        >
                            <p >{this.props.bookInfo.name}</p>
                        </Link>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={3}>
                        <p>价格：{(this.props.bookInfo.price/100).toFixed(2)}&nbsp;元</p>
                        <p>库存：{this.props.bookInfo.inventory}&nbsp;本</p>
                        <p>销量：{this.props.bookInfo.sellNum}&nbsp;本</p>
                        <p>分类：{this.props.bookInfo.type}</p>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={4}></Col>
                            <Col span={8}>
                                <Link to={'detail?id='+this.props.bookInfo.id}>
                                    <Button  type="primary">查看详情</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <span>
                        <span style={{color:'blue'}}>作者：</span><>{this.props.bookInfo.author} </>
                        {/*<span>{this.props.bookInfo.description}</span>*/}
                        <br/>
                        <>
                            <span style={{color:'blue'}}>简介：</span>
                            <span dangerouslySetInnerHTML={{__html: this.props.bookInfo.description}} />
                        </>

                    </span>

                </Row>
                <Divider></Divider>
            </>

        );
    }


}

export default SearchBookRow;
import React from "react";
import {Col, DatePicker, Divider, Image, Row, Statistic, Table, Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import {getUserbookAllBuyNum, getUserbookTotalPay, getUserbookWithBuyNum} from "../../../Service/StatisticService";
import {BookDetailButton} from "../../../component/UtilComponet/BookDetailButton";

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;


class UserStatistic extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
            UserbookAllBuyNum:0,//购买总数
            UserbookTotalPay:0, //总金额
        }
        /**
         * 获取书籍的购买数量
         */
        getUserbookAllBuyNum({},(data)=>{
            console.log(data);
            this.setState({
                UserbookAllBuyNum:parseInt(data)
            });
        });
        /**
         * 获取书籍和购买数量
         */
        getUserbookWithBuyNum({},(data)=>{
            console.log(data);
            // this.state.userData
            this.setState({
                userData:data.concat([])
            });
        });
        /**
         * 获取购买书籍所花费的全部金额
         */
        getUserbookTotalPay({},(data)=>{
            console.log(data);
            this.setState({
                UserbookTotalPay:(parseInt(data)/100).toFixed(2)
            });
        });
    }


    onChange = (date, dateString) => {
        /**
         * 如果有起止时间，则获取数据，否则不管
         */
        if(dateString.length >=2){
            let obj = {
                startDate: dateString[0],
                endDate: dateString[1],
            };

            getUserbookAllBuyNum(obj,(data)=>{
                console.log(data);
                this.setState({
                    UserbookAllBuyNum:parseInt(data)
                });
            });

            getUserbookWithBuyNum(obj,(data)=>{
                console.log(data);
                this.setState({
                    userData:data.concat([])
                });
            });

            getUserbookTotalPay(obj,(data)=>{
                console.log(data);
                this.setState({
                    UserbookTotalPay:(parseInt(data)/100).toFixed(2)
                });
            });

        }
    };

    columns = [
        {
            title: '书籍封面',
            dataIndex: 3,
            key: 'image',
            render: (text) => <Image src={text} width={60}/>
        },
        {
            title: '书籍名称',
            dataIndex: 2,
            key: 'name',
        },
        {
            title: '购买数量',
            dataIndex: 1,
            key: 'buyNum',
            sorter: {
                compare: (a, b) => a[1] - b[1],
                multiple: 1,
            },
        },
        {
            title: '查看详情',
            key: 'detail',
            render: (text,record) => <BookDetailButton bookId={record[0]} text={"查看"}/>
        },

    ];


    render() {
        return (
                <div>
                    <h2 style={{color:"#ff78ac"}}>用户个人消费统计</h2>
                    <Divider/>
                    <span style={{color: "#ff5294"}}>请选择统计的时间范围：</span><RangePicker onChange={this.onChange} showTime/>
                   <Divider/>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Statistic title="购买书籍数量" value={this.state.UserbookAllBuyNum} suffix={"本"}/>
                        </Col>
                        <Col span={6}>
                            <Statistic title="消费金额￥" value={this.state.UserbookTotalPay} precision={2} suffix={"元"} />
                        </Col>
                    </Row>
                    <br/>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />统计数据</>} key="1">
                            <Table columns={this.columns} dataSource={this.state.userData}/>;
                        </TabPane>
                    </Tabs>
                </div>

        );
    }
}


export default UserStatistic;
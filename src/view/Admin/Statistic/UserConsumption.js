import React from "react";
import {getuserConsumeData} from "../../../Service/StatisticService";
import {DatePicker, Divider, Table, Tabs} from "antd";
import {BarChartOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Column} from "@ant-design/charts";
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
class UserConsumption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
            chartData: [],
        }
        getuserConsumeData({},(data)=> {
            this.setState({
                userData:data.concat([])
            });
            let tmpChartData = [];

            for(let i=0;i<data.length; i++){
                let obj = {
                    user: data[i][0],
                    payAll: parseInt(data[i][1])/100
                }
                tmpChartData.push(obj);
            }
            console.log(tmpChartData);

            this.setState({
                chartData: tmpChartData
            });
        });


    }
    onChange = (date, dateString) => {
        if(dateString.length >=2){
            let obj = {
                startDate: dateString[0],
                endDate: dateString[1],
            };
            getuserConsumeData(obj,(data)=>{
                console.log(data);
                this.setState({
                    userData:data.concat([])
                });

                let tmpChartData = [];

                for(let i=0;i<data.length; i++){
                    let obj = {
                        user: data[i][0],
                        payAll: parseInt(data[i][1])/100
                    }
                    tmpChartData.push(obj);
                }
                console.log(tmpChartData);

                this.setState({
                    chartData: tmpChartData
                });

            });
            console.log(obj);
        }
    };

    columns = [
        {
            title: '用户',
            dataIndex: 0,
            key: 'user',
            // ...this.getColumnSearchProps(0),
        },
        {
            title: '消费金额',
            dataIndex: 1,
            key: 'payAll',
            render: (text,record) => <p>￥{(parseInt(text)/100).toFixed(2)}</p>,
            sorter: {
                compare: (a, b) => a[1] - b[1],
                multiple: 1,
            },
        },
    ];

    render() {
        return (
            <div>
                <span>统计范围：</span><RangePicker onChange={this.onChange} showTime/>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<><UnorderedListOutlined />用户消费统计表</>} key="1">
                        <Table columns={this.columns} dataSource={this.state.userData}/>
                    </TabPane>
                    <TabPane tab={<><BarChartOutlined />用户消费统计图</>} key="2">
                        <br/><br/><br/>
                        <Column data={this.state.chartData}
                                xField={"user"}
                                yField={"payAll"}
                                label={{                                    // 可手动配置 label 数据标签位置
                                    position: 'middle',
                                    style: {fill: '#000000',},
                                }}
                                color={"#FFD700"}
                                xAxis={{
                                    label: {
                                        autoHide: true,
                                        autoRotate: false,
                                    },
                                }}
                                slider={{
                                    start: 0.0,
                                    end: 1.0,
                                }}
                        />

                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export {UserConsumption};
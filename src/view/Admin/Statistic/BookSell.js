import React from "react";
import {Button, DatePicker, Divider, Image, Input, Space, Table, Tabs} from "antd";
import {BarChartOutlined, SearchOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Column} from "@ant-design/charts";
import {getBooksSellData} from "../../../Service/StatisticService";

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

class BookSell extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sellData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
            chartData: []
        }
        /**
         * 获取书籍销售信息
         */
        getBooksSellData({},(data)=>{
            this.setState({
                sellData:data.concat([])
            });

            let tmpChartData = [];
            for(let i=0;i<data.length; i++){
                let obj = {
                    book: data[i][2],
                    bookSellnum: data[i][1]
                }
                tmpChartData.push(obj);
            }

            this.setState({
                chartData: tmpChartData
            });
        });

    }

    /**
     * 一些搜索的有关函数
     */
    searchInput = null;
    setSearchText(val){
        this.setState({ searchText:val});
    }

    setSearchedColumn(val){
        this.setState({ searchedColumn:val});
    }

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setSearchText(selectedKeys[0]);
        this.setSearchedColumn(dataIndex);
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setSearchText('');
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={this.searchInput}
                    placeholder={`Search ${dataIndex}`} value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block',}}
                />
                <Space>
                    <Button
                        type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />} size="small" style={{width: 90,}}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
    });


    columns = [
        {
            title: '书籍封面',
            dataIndex: 3,//返回的jsonArray中的Index
            key: 'image',
            render: (text) => <Image src={text} width={60}/>
        },
        {
            title: '书籍名称',
            dataIndex: 2,
            key: 'name',
            ...this.getColumnSearchProps(2),
        },
        {
            title: '书籍销量',
            dataIndex: 1,
            key: 'sellnum',
            sorter: {
                compare: (a, b) => a[1] - b[1],
                multiple: 1,
            },
        },
        {
            title: '查看详情',
            key: 'detail',
            render: (text,record) => <Button type={"link"} style={{margin:"3px"}} href={"/AdminBookDetail?id="+record[0]}>查看</Button>
        },
    ];

    /**
     * 当时间范围变化之后，重新获取数据
     * @param date
     * @param dateString
     */

    onChange = (date, dateString) => {
        if(dateString.length >=2){
            let obj = {
                startDate: dateString[0],
                endDate: dateString[1],
            };
            getBooksSellData(obj,(data)=>{
                console.log(data);
                this.setState({
                    sellData:data.concat([])
                });

                let tmpChartData = [];
                for(let i=0;i<data.length; i++){
                    let obj = {
                        book: data[i][2],
                        bookSellnum: data[i][1]
                    }
                    tmpChartData.push(obj);
                }

                this.setState({
                    chartData: tmpChartData
                });
            });
        }
    };



    render() {
        return (

                <div className="MainContentsCard_compact">
                    <span>统计范围：</span><RangePicker onChange={this.onChange} showTime/>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />书籍销量统计表</>} key="1">
                            <Table columns={this.columns} dataSource={this.state.sellData}/>
                        </TabPane>
                        <TabPane tab={<><BarChartOutlined />书籍销量统计图</>} key="2">
                            <br/><br/><br/>
                            <Column data={this.state.chartData}
                                    xField={"book"}
                                    yField={"bookSellnum"}
                                    label={{                                    // 可手动配置 label 数据标签位置
                                        position: 'middle',
                                        style: {fill: '#000000',},
                                    }}
                                    color={"#98FB98"}
                                    xAxis={{
                                        label: {
                                            autoHide: false,
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

        );
    }
}

export default BookSell;
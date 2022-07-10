import React from "react";
import {Button, DatePicker, Image, Modal, Space, Table, Tag, message, Input} from "antd";
import {getAllOrder, getUserOrder, OrderPriceTrim} from "../../Service/OrderService";
import {getRequest} from "../../utils/ajax";
import {apiURL, frontURL} from "../../config/BaseConfig";
import {SearchOutlined} from "@ant-design/icons";
import DateFormat from "util";
import Highlighter from "react-highlight-words";
const { RangePicker } = DatePicker;
class AdminOrderTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            orderData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
        }

            getAllOrder((data) => {
                data = OrderPriceTrim(data);
                console.log(data);
                this.setState({
                    orderData: data.concat([]),
                });
            })
        }

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

    getColumnSearchTimeProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{padding: 8,}}>
                <Space>
                    <RangePicker renderExtraFooter={() => '请选择时间来精确查询~'}
                                 onChange={ (value, dateString) => {
                                     console.log(dateString);
                                     let startTime = new Date(dateString[0]).getTime();
                                     let endTime = new Date(dateString[1]).getTime();

                                     let comb = startTime + ":" + endTime;
                                     let obj = [];
                                     obj.push(comb);
                                     setSelectedKeys(obj);
                                 }}
                                 showTime showNow allowClear/>
                    <Button
                        type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />} size="small" style={{width: 90,}}
                    >
                        搜索
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        重置
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        过滤
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
        onFilter: (value, record) => {

            let tmp = value.split(":");         //获取起止时间，这里的时间表示为ms数
            let recordVal = new Date(record[dataIndex]).getTime();//将表中记录的时间也转化成ms数
            console.log("recordVal"+new Date(record[dataIndex]).getTime());
            return parseInt(tmp[0]) <= recordVal && parseInt(tmp[1]) >= recordVal //返回范围内的结果！！
        },
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                // setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
    });

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
        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    columns = [
        {
            title: '订单编号',
            dataIndex: 'orderId',
            key: 'orderID',
            ...this.getColumnSearchProps("orderId"),
        },
        {
            title: '所属用户',
            dataIndex: 'belongUser',
            key: 'belonguser',
            ...this.getColumnSearchProps("belongUser"),
        },

        {
            title: '联系方式',
            dataIndex: 'phoneNumber',
            key: 'contactphone',
        },
        {
            title: '用户地址',
            dataIndex: 'destination',
            key: 'destination',
        },
        {
            title: '邮政编码',
            dataIndex: 'postcode',
            key: 'postalcode',
        },
        {
            title: '收件人',
            dataIndex: 'receiverName',
            key: 'receivername',
            ...this.getColumnSearchProps("receiverName"),
        },
        {
            title: '总价(元）',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
        {
            title: '时间',
            dataIndex: 'createTime',
            key: 'createTime',  //return DateFormat.format(text);
            render: (text) => {return DateFormat.format(text).toLocaleString();},
            ...this.getColumnSearchTimeProps('createTime')
        },
        {
            title: '操作',
            dataIndex:'',
            render:(row, record) => {
                return <Button danger onClick={() => this.removeOrder(row, record.key)}>删除</Button>}
        }

    ];

    removeOrder=(row, key)=>
    {
        Modal.confirm({
            title: '删除内容',
            content: `你确定要删除该订单吗？`,
            onOk: () => {
                let url = apiURL+"/deleteOrder";
                getRequest(url,{orderID:row.orderId},(data)=>
                {
                    if(data === 1)
                        window.location.reload();
                })
                message.success('删除成功!')
            }
        })
    }



    expandedRowRender = (record) => {

        // console.log(record);
        const columns = [
            {
                title: '书名',
                dataIndex: 'bookName',
                key: 'bookName',
                render: (text,record) => {
                    return( <a onClick={() => {
                        window.location.href = frontURL + "/detail?id=" + record.bookid
                    }}>{text}</a>)
                }
            },
            {
                title: '单价',
                dataIndex: 'price',
                key: 'price',
                render:(text,record)=> {
                    return(  <p>{(parseInt(record.price) / 100).toFixed(2)}元</p>)
                }
            },
            {
                title: '购买数量',
                dataIndex: 'buyNum',
                key: 'buynum',
            },
            {
                title: '状态',
                dataIndex: 'submitStatus',
                key: 'submitStatus',
                render:() =><Tag color= {"orange"}>已提交</Tag>

            }

        ];

        return <Table columns={columns} dataSource={record.cartOrderList} pagination={false} />;
    };

    render() {

        return(
            <Table
                columns={this.columns}
                expandable={{
                    expandedRowRender:(record) => this.expandedRowRender(record),
                    rowKey: "orderID"
                }}
                rowKey={"orderId"}
                dataSource={this.state.orderData}
            />
        );
    }
}

export default AdminOrderTable;
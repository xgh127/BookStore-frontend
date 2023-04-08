import React from "react";
import {Button, DatePicker, Image, Space, Table, Input,Highligter} from "antd";
import {OrderItemPriceTrim} from "../../Service/OrderService";
import {SearchOutlined} from "@ant-design/icons";
import DateFormat from "util";
import {getOrderItemByUsername} from "../../Service/OrderItemService";
import {UserConst} from "../../Constant/UserConst";
import Highlighter from "react-highlight-words";
const { RangePicker } = DatePicker;
class OrderItemTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            orderData: [],
            searchText: {},
            searchedColumn: "",
            searchTime: [],
        }
        /**
         * 获取所有的orderItem   to be continue...
         * */
        getOrderItemByUsername((data) => {
            data = OrderItemPriceTrim(data);
            console.log(data);
            this.setState({
                orderData: data.concat([]),
            });
        },localStorage.getItem(UserConst.USERNAME));
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

    /**
     * 时间范围搜索
     * */
    getColumnSearchTimeProps = (dataIndex) => ({
        /**
         * 下拉栏，点击图标显示RangePicker
         * */
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

            let tmp = value.split(":");                                 //获取起止时间，这里的时间表示为ms数
            let recordVal = new Date(record[dataIndex]).getTime();      //将表中记录的时间也转化成ms数
            console.log("recordVal"+new Date(record[dataIndex]).getTime());
            return parseInt(tmp[0]) <= recordVal && parseInt(tmp[1]) >= recordVal //返回范围内的结果！！
        },
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                // setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
    });
    /**
     * 其他属性的搜索
     * @param dataIndex
     * @returns {{filterDropdown: (function({setSelectedKeys: *, selectedKeys: *, confirm: *, clearFilters: *})), filterIcon: (function(*)), onFilter: (function(*, *): boolean), onFilterDropdownVisibleChange: OrderItemTable.getColumnSearchProps.onFilterDropdownVisibleChange, render: (function(*): JSX.Element|*)}}
     */
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
            title: '商品ID',
            dataIndex: 'orderItemId',
            key: 'orderItemId',
        },
        {
            title: '所属订单号',
            dataIndex: 'belongOrderId',
            key: 'belongOrderId',
        },


        {
            title: 'ISBN',
            dataIndex: 'isbn',
            key: 'isbn',
        },
        {
            title: '书籍名称',
            dataIndex: 'name',
            key: 'name',
            ...this.getColumnSearchProps('name') //设计用书籍名称过滤
        },
        {
            title: '书籍封面',
            dataIndex: 'image',
            key: 'image',
            render:(text)=><Image src={text} width={60}/>
        },
        {
            title: '购买数量',
            dataIndex: 'buyNum',
            key: 'buyNum',
        },
        {
            title: '价格(元）',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '时间',
            dataIndex: 'finsihTime',
            key: 'finsihTime',  //return DateFormat.format(text);
            render: (text) => {return DateFormat.format(text).toLocaleString();},
            ...this.getColumnSearchTimeProps('finsihTime')
        },

    ];


    render() {

        return(
            <Table
                columns={this.columns}
                rowKey={"orderItemId"}
                dataSource={this.state.orderData}
            />
        );
    }
}

export default OrderItemTable;
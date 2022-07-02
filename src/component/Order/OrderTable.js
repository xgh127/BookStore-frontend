import React from "react";
import {Button, DatePicker, Image, Modal, Space, Table, Tag,message} from "antd";
import {getUserOrder, OrderPriceTrim} from "../../Service/OrderService";
import {PriceTrim} from "../../Service/bookService";
import {getRequest, postRequest} from "../../utils/ajax";
import {apiURL, frontURL} from "../../config/BaseConfig";

class OrderTable extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            orderData:[],
            // searchText:{},
            // searchedColumn:"",
            // searchTime:[],
        }
        getUserOrder( (data) =>{
            data=OrderPriceTrim(data);
            console.log(data);
            this.setState({
                orderData:data,
            });
        })
    }
     columns = [
        {
            title: '订单编号',
            dataIndex: 'orderId',
            key: 'orderID',
        },
        {
            title: '所属用户',
            dataIndex: 'belongUser',
            key: 'belonguser',
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
        },
        {
            title: '总价(元）',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
        {
            title: '时间',
            dataIndex: 'createTime',
            key: 'createTime',
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
    // searchInput = null;
    // setsearchText(val){
    //     this.setState({searchText:val});
    // }



    expandedRowRender = (record) => {

        console.log(record);
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

export default OrderTable;
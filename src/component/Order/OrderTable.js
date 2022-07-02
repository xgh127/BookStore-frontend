import React from "react";
import {Button, DatePicker, Image, Modal, Space, Table, Tag,message} from "antd";
import {getUserOrder, OrderPriceTrim} from "../../Service/OrderService";
import {PriceTrim} from "../../Service/bookService";
import {getRequest, postRequest} from "../../utils/ajax";
import {apiURL} from "../../config/BaseConfig";

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
            key: 'create_time',

        },
        {
            title: '操作',
            dataIndex:'',
            render:(row, record) => {
                return <Button onClick={() => this.removeOrder(row, record.key)}>删除</Button>}
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



    // expandedRowRender = (record) => {
    //
    //     console.log(record);
    //     const columns = [
    //         {
    //             title: '图片',
    //             dataIndex: 'bookurl',
    //             key: 'bookurl',
    //             render: (text) => <Image src={text} width={60}/>
    //         },
    //         {
    //             title: '状态',
    //             dataIndex: 'status',
    //             key: 'status',
    //             render: (_, { tags }) => {
    //                 if(parseInt(_) === -1)
    //                     return (
    //                         <Tag color={"red"}>已取消</Tag>
    //                     );
    //                 else if(parseInt(_) === 0)
    //                     return (
    //                         <Tag color={"orange"} >购物车</Tag>
    //                     );
    //                 else if(parseInt(_) === 1)
    //                     return (
    //                         <Tag color={"orange"} >未支付</Tag>
    //                     );
    //
    //                 else if(parseInt(_) === 2)
    //                     return (
    //                         <Tag color={"green"} >已支付</Tag>
    //                     );
    //                 else if(parseInt(_) === 3)
    //                     return (
    //                         <Tag color={"blue"} >已完成</Tag>
    //                     );
    //             },
    //         },
    //         {
    //             title: '标题',
    //             dataIndex: 'booktitle',
    //             key: 'booktitle',
    //             width: 300,
    //         },
    //         {
    //             title: '购买数量',
    //             dataIndex: 'buynum',
    //             key: 'buynum',
    //         },
    //         {
    //             title: '单价',
    //             render: (text,record) =>
    //             {
    //                 if(record.buynum!==0)
    //                     return (
    //                         <p className="bookDetailPrice">
    //                             ￥{(parseInt(record.payprice)/parseInt(record.buynum)/100).toFixed(2)}
    //                         </p>
    //                     );
    //                 else{
    //                     return (
    //                         <p className="bookDetailPrice">
    //                             ￥0.00
    //                         </p>
    //                     );
    //                 }
    //
    //             }
    //
    //         },
    //         {
    //             title: '支付金额',
    //             dataIndex: 'payprice',
    //             key: 'payprice',
    //             render: (text,record) => <p className="bookDetailPrice">￥{(parseInt(text)/100).toFixed(2)}</p>,
    //         },
    //
    //     ];
    //
    //     return <Table columns={columns} dataSource={record.chileItem} pagination={false} />;
    // };

    render() {

        return(
            <Table
                columns={this.columns}
                 rowKey={"orderId"}
                dataSource={this.state.orderData}
            />
        );
    }
}

export default OrderTable;
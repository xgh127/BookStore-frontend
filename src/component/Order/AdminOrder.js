import React from "react";
import {Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import OrderTable from "./OrderTable";
import AdminOrderTable from "./AdminOrderTable";



const { TabPane } = Tabs;
class AdminOrder extends React.Component{


    render() {
        return (

            <div >
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<><UnorderedListOutlined />查看所有订单项</>} key="1">
                        <AdminOrderTable/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default AdminOrder;
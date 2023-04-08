import React from "react";
import {Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import AdminOrderTable from "./AdminOrderTable";
import AdminOrderItemTable from "./AdminOrderItemTable";


const { TabPane } = Tabs;
class AdminOrder extends React.Component{


    render() {
        return (

            <div >
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<><UnorderedListOutlined />查看所有订单项</>} key="1">
                        <AdminOrderTable/>
                    </TabPane>
                    <TabPane tab={<><UnorderedListOutlined />查看订单子项</>} key="2">
                        <AdminOrderItemTable/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default AdminOrder;
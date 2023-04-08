import React from "react";
import {Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import OrderTable from "./OrderTable";
import OrderItemTable from "./OrderItemTable";



const { TabPane } = Tabs;
class MyOrder extends React.Component{


    render() {
        return (

                <div >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />查看所有订单项</>} key="1">
                            <OrderTable/>
                        </TabPane>
                        <TabPane  tab={<><UnorderedListOutlined />查看订单子项</>} key="2">
                            <OrderItemTable/>
                            </TabPane>
                    </Tabs>
                </div>
        );
    }
}

export default MyOrder;
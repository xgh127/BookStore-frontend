import React from "react";
import {Tabs} from "antd";
import {UnorderedListOutlined} from "@ant-design/icons";
import OrderTable from "./OrderTable";



const { TabPane } = Tabs;
class MyOrder extends React.Component{


    render() {
        return (

                <div >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UnorderedListOutlined />查看所有订单项</>} key="1">
                            <OrderTable idAdmin={0}/>
                        </TabPane>
                    </Tabs>
                </div>
        );
    }
}

export default MyOrder;
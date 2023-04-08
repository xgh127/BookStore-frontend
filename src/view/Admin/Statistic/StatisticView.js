import React from "react";
import '../../../css/basicBackground.css'
import AdminSideBar from "../../../component/Decoration/AdminSideBar";
import SubContainer from "../../../component/Container/subContainer";
import HeaderBar from "../../../component/Decoration/HeaderBar";
import {UserConsumption} from "./UserConsumption";
import {Tabs} from "antd";
import BookSell from "./BookSell";
import {SmileTwoTone, UnorderedListOutlined} from "@ant-design/icons";
import {Footer} from "antd/es/layout/layout";
const { TabPane } = Tabs;
class StatisticView extends React.Component{



    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"数据统计"}/>
                <AdminSideBar/>
                <SubContainer elem = {

                    <Tabs efaultActiveKey="1">
                        <TabPane  tab={<> <h2 style={{color:"#ff78ac"}}>用户消费数据统计</h2></>} key = '1' >
                        <UserConsumption/>
                     </TabPane>
                        <TabPane tab={<><h2 style={{color:"#ff78ac"}}>书籍销售数据统计</h2></>} key = '2'>
                            <BookSell/>
                         </TabPane>
                     </Tabs>

                }>

                </SubContainer>
                <Footer style={{ textAlign: 'center' }}>CopyRight © 2023 AllRights Reserved.ALL Developed By Xu GuoHong</Footer>
            </div>
        )
    }
}

export {StatisticView};
import React from "react";
import '../../css/basicBackground.css'
import {Affix, Button} from "antd";

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class AdminSideBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div className="SideBar">

                {/*Affix组件能固定侧边栏，滚动也不变*/}
                <Affix >
                    <a className="block-min-01">
                        <div> <Link to="/UserMange">用户管理</Link></div>
                    </a>

                    <a className="block-min-02">
                        <div><Link to="/OrderMange">订单管理</Link></div>
                    </a>
                    <a className="block-min-03">
                        <div><Link to="/BookMange">书籍管理</Link></div>
                    </a>
                    <a className="block-min-05">
                        <div><Link to="/Statistic">数据统计</Link></div>
                    </a>
                    <a className="block-min-04" >
                        <div><Link to ="/AdminPersonalCenter">个人中心</Link></div>
                    </a>
                </Affix>
            </div>
        )
    }
}
export default AdminSideBar;
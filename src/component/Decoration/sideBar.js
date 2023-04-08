import React from "react";
import '../../css/basicBackground.css'
import {Affix} from "antd";

import {Link} from 'react-router-dom'
class SideBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <div className="SideBar">

                {/*Affix组件能固定侧边栏，滚动也不变*/}
                <Affix offsetTop={200} >

                <a className="block-min-01">
                    <div> <Link to="/first">首页</Link></div>
                </a>

                <a className="block-min-02">
                    <div><Link to="/chart">我的购物车</Link></div>
                </a>

                <a className="block-min-03">
                    <div><Link to="/order">我的订单</Link></div>
                </a>

                <a className="block-min-05">
                    <div><Link to="/mircoService">数据统计</Link></div>
                </a>

                <a className="block-min-04" >
                    <div><Link to ="/personCenter">个人中心</Link></div>
                </a>

                </Affix>
            </div>
        )
    }
}
export default SideBar;
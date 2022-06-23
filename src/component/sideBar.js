import React from "react";
import '../css/basicBackground.css'

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class SideBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <div className="SideBar">
                <a className="block-min-01" href="/src/html/all-books.html">
                    <div> <Link to="/first">首页</Link></div>
                </a>
                <a className="block-min-02" href="/src/html/chart.html">
                    <div><Link to="/chart">我的购物车</Link></div>
                </a>
                <a className="block-min-03" href="/src/index/wsgh.html">
                    <div><Link to="/order">我的订单</Link></div>
                </a>
                <a className="block-min-04" href="/src/html/my_profile.html">
                    <div><Link to ="/personCenter">个人中心</Link></div>
                </a>
            </div>
        )
    }
}
export default SideBar;
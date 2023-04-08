import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import AuthorSearchBar from "../component/SearchComponent/AuthorSearchBar";
import UserStatistic from "./Admin/Statistic/UserStatistic";
import {Divider} from "antd";
import {Footer} from "antd/es/layout/layout";

class MircoServiceView extends React.Component{

    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"数据统计"}/>
                <SideBar/>
                <SubContainer elem = {

                    <div >
                       {/* <h2 style={{color:"#ff78ac"}}>通过书名查询作者</h2>*/}
                       {/*<AuthorSearchBar/>*/}
                       {/* <Divider/>*/}
                        <UserStatistic/>
                    </div>
                }>

                </SubContainer>

            </div>
        )
    }
}

export {MircoServiceView};
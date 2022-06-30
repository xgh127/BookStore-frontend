import React from "react";
import '../css/basicBackground.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import Container from "../component/Container/Container";
import Movie from "../component/Chart/chart";

let chart=<Movie/> ;                           //购物车
let pageChart =  <SubContainer elem={chart}/>;
class ChartView extends React.Component {

    render() {
    return(
        <div>
            <HeaderBar Head={"我的购物车"}/>
                <Container
                SideBar={<SideBar/>}
                Sub={pageChart}/>
        </div>
      )
    }
}

let theChartPage = () =>{
    return(<ChartView/>)
}
export {theChartPage};
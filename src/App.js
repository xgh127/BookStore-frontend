import title from './picture/logo.png'
import './App.css';
import './css/basicBackground.css'
import './component/table';
import './component/book_detail';
import React from "react";
import ReactDOM from 'react-dom';
import './css/chart.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './css/chart.css'
import SideBar from "./component/sideBar";
import SubContainer from "./component/subContainer";
import {TheFirst} from "./view/Home";
import Container from "./component/Container";
import Movie from "./component/chart";
import {loginPage} from "./view/login";
import {theBookDetail} from"./view/bookDetail"
        /*页面的header*/
function Head_img(){//
    return(
        <img className="title"
             src={title}
             alt="title"/>
    ) ;
}
function HeadBar(props){
    return(
        <div className="title-box">
            <Head_img/>
            <h1>{props.Head}</h1>
        </div>
    );
}
const pageHead={
    Head:'首页'
}
const sideBar=<SideBar/>
const header=()=> <HeadBar Head={pageHead.Head}/>
let chart=<Movie/>                                //购物车
let pageChart=<SubContainer elem={chart}/>        //次一级的购物车页面
const Page_chart=()=>
{
    return(
      <div>
          {header()}
          <Container     SideBar={sideBar}
                         Sub={pageChart}/>
      </div>
    )
}
/*直接import的登录页面*/
function AllOfPage(){
    return(
        <Router>
        <div>
                <Route exact path="/" component={loginPage}/>
                <Route exact path="/first" component={TheFirst}/>
                <Route exact path='/detail' component={theBookDetail}/>
                <Route exact path="/chart" component={Page_chart}/>
        </div>
        </Router>
    )
}
function App() {
  return (
<AllOfPage/>

  )
}
ReactDOM.render(<App/>,document.getElementById("root"));
export default App;

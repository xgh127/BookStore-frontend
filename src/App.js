import './App.css';
import './css/basicBackground.css'
import './component/table';
import './component/book_detail';
import React from "react";
import ReactDOM from 'react-dom';
import './css/chart.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './css/chart.css'
import {TheFirst} from "./view/Home";
import {loginPage} from "./view/login";
import {theBookDetail} from"./view/bookDetail"
import {theChartPage} from "./view/ChartView";

/*直接import的登录页面*/
function AllOfPage(){
    return(
        <Router>
        <div>
                <Route exact path="/" component={loginPage}/>
                <Route exact path="/first" component={TheFirst}/>
                <Route exact path='/detail' component={theBookDetail}/>
                <Route exact path="/chart" component={theChartPage}/>
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

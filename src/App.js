import './App.css';
import './css/basicBackground.css'
import './component/table';
import './component/BookDetail/BookDetail';
import React from "react";
import ReactDOM from 'react-dom';
import './css/chart.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './css/chart.css'
import {TheFirst} from "./view/HomeView";
import {loginPage} from "./view/LoginView";
import {theBookDetail} from"./view/bookDetail"
import {theChartPage} from "./view/ChartView";
import {thePersonCenter} from "./view/PersonCeter";
import {theOrder} from "./view/OrderView";
import {theRegisterPage} from "./view/RegisterView";
import {history} from "./utils/history";
import {MakeOrderSuccessView} from "./view/Result/MakeOrderSuccess";
import {UserMangePage} from "./view/Admin/UserMangeView";
import {OrderMangePage} from "./view/Admin/OrderMange";
import {BookMangePage} from "./view/Admin/BookManageView";
import {theAdminPersonCenter} from "./view/Admin/AdminPersonCenter";
import {AdminDetail} from "./view/Admin/AdminCheckBookDetail";

/*直接import的登录页面*/
function AllOfPage(){
    return(
        <Router history={history}>
        <div>
                <Route exact path="/" component={loginPage}/>
                <Route exact path="/register" component={theRegisterPage}/>
                <Route exact path="/first" component={TheFirst}/>
                <Route exact path='/detail' component={theBookDetail}/>
                <Route exact path="/chart" component={theChartPage}/>
                <Route exact path="/MakeOrderSuccessView" component={MakeOrderSuccessView}/>
                <Route exact path="/order" component={theOrder}/>
                <Route exact path="/personCenter" component={thePersonCenter}/>
                {/*管理员页面*/}
                <Route exact path = "/UserMange" component={UserMangePage}/>
                <Route exact path = "/OrderMange" component={OrderMangePage}/>
                <Route exact path = "/BookMange" component={BookMangePage}/>
                <Route exact path = "/AdminBookDetail" component={AdminDetail}/>
                <Route exact path = "/AdminPersonalCenter" component={theAdminPersonCenter}/>
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

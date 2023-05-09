import './App.css';
import './css/basicBackground.css'
import './component/Table/BookTable';
import './component/BookDetail/BookDetail';
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import './css/chart.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import './css/chart.css'
import {HomeView} from "./view/HomeView";
import {LoginView} from "./view/LoginView";
import {BookDetailView} from "./view/bookDetailView"
import {ChartView} from "./view/ChartView";
import {PersonCenterView} from "./view/PersonCeter";
import {OrderView} from "./view/OrderView";
import {RegisterView} from "./view/RegisterView";
import {history} from "./utils/history";
import {MakeOrderSuccessView} from "./view/Result/MakeOrderSuccess";
import {UserMangeView} from "./view/Admin/UserMangeView";
import {OrderMangeView} from "./view/Admin/OrderManageView";
import {BookMangeView} from "./view/Admin/BookManageView";
import {AdminPersonCenterView} from "./view/Admin/AdminPersonCenter";
import {DisplayBookDetailView} from "./view/Admin/AdminCheckBookDetail";
import {EditBookView} from "./view/Admin/EditBookView";
import {EditBookSuccessView} from "./view/Result/editBookSuccess";
import {ErrorPageView} from "./view/Result/ErrorPage";
import {PublishBookSuccessView} from "./view/Result/PublishBookSuccess";
import {RegisterSuccessView} from "./view/Result/RegisterSuccess";
import {LogoutSuccessView} from "./view/Result/LogoutSuccess";
import {GlobalSearchResultView} from "./view/SearchResult/GlobalSearchResultView";
import {MircoServiceView} from "./view/mircoServiceView";
import {AuthorSearchView} from "./view/SearchResult/AuthorSearchView";
import {StatisticView} from "./view/Admin/Statistic/StatisticView";
import PrivateRoute from "./PrivateRoute";
import {clearAuthenticated} from "./Service/UserService";

/*直接import的登录页面*/
function AllOfPage(){
    return(
        <Router history={history}>
        <div>
                <Route exact path="/" component={LoginView}/>
                <Route exact path="/register" component={RegisterView}/>
                <PrivateRoute exact path="/first" component={HomeView}/>
                <PrivateRoute exact path='/detail' component={BookDetailView}/>
                <PrivateRoute exact path="/chart" component={ChartView}/>
                <PrivateRoute exact path="/MakeOrderSuccessView" component={MakeOrderSuccessView}/>
                <PrivateRoute exact path="/order" component={OrderView}/>
                <PrivateRoute exact path="/personCenter" component={PersonCenterView}/>
                <Route exact path="/registerSuccess" component={RegisterSuccessView}/>
                <PrivateRoute exact path="/logoutSuccess" component={LogoutSuccessView}/>
                <PrivateRoute exact path="/searchResult" component={GlobalSearchResultView}/>
                <PrivateRoute exact path="/mircoService" component={MircoServiceView}/>
                <Route exact path="/AuthorSearchResult" component={AuthorSearchView}/>
                {/*管理员页面*/}
                <Route exact path = "/UserMange" component={UserMangeView}/>
                <Route exact path = "/Statistic" component={StatisticView}/>
                <Route exact path = "/OrderMange" component={OrderMangeView}/>
                <Route exact path = "/BookMange" component={BookMangeView}/>
                <Route exact path = "/AdminBookDetail" component={DisplayBookDetailView}/>
                <Route exact path = "/AdminPersonalCenter" component={AdminPersonCenterView}/>
                <Route exact path = "/AdminEditBook" component={EditBookView}/>
                <Route exact path = "/Admin/editBookSuccess" component={EditBookSuccessView}/>
                <Route exact path = "/Admin/PublishBookSuccess" component={PublishBookSuccessView}/>
                <Route exact path = "/Error" component={ErrorPageView}/>
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

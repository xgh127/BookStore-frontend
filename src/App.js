import './App.css';
import './css/basicBackground.css'
import './component/Table/BookTable';
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
import {OrderMangePage} from "./view/Admin/OrderManageView";
import {BookMangePage} from "./view/Admin/BookManageView";
import {theAdminPersonCenter} from "./view/Admin/AdminPersonCenter";
import {AdminDetail} from "./view/Admin/AdminCheckBookDetail";
import {EditBookPage} from "./view/Admin/EditBookView";
import {EditBookSuccessView} from "./view/Result/editBookSuccess";
import {ErrorPageView} from "./view/Result/ErrorPage";
import {PublishBookSuccessView} from "./view/Result/PublishBookSuccess";
import {RegisterSuccessView} from "./view/Result/RegisterSuccess";
import {LogoutSuccessView} from "./view/Result/LogoutSuccess";
import SearchResultPage from "./component/SearchComponent/GlobalSearchResult";
import {theSearchResult} from "./view/SearchResult/GlobalSearchResultView";
import {ServiceView} from "./view/mircoServiceView";
import {theAuthorSearchResult} from "./view/SearchResult/AuthorSearchView";

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
                <Route exact path="/registerSuccess" component={RegisterSuccessView}/>
                <Route exact path="/logoutSuccess" component={LogoutSuccessView}/>
                <Route exact path="/searchResult" component={theSearchResult}/>
                <Route exact path="/mircoService" component={ServiceView}/>
                <Route exact path="/AuthorSearchResult" component={theAuthorSearchResult}/>
                {/*管理员页面*/}
                <Route exact path = "/UserMange" component={UserMangePage}/>
                <Route exact path = "/OrderMange" component={OrderMangePage}/>
                <Route exact path = "/BookMange" component={BookMangePage}/>
                <Route exact path = "/AdminBookDetail" component={AdminDetail}/>
                <Route exact path = "/AdminPersonalCenter" component={theAdminPersonCenter}/>
                <Route exact path = "/AdminEditBook" component={EditBookPage}/>
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

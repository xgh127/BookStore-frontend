// import React from 'react';
// import { Router, Route, Switch, Redirect} from 'react-router-dom';
// import PrivateRoute from './PrivateRoute'
// import LoginRoute from  './LoginRoute'
// import WebHome from "./view/web-Home";
// import WebAbout from "./view/web-about";
// import {history} from "./utils/history";
// import WebTopic from "./view/web-Topic";
//
// const H=<WebHome/>
// const A=<WebAbout/>
// const WebOfHome=()=>{
//     return(
//         <H/>
//     )
// }
// class BasicRoute extends React.Component{
//
//     constructor(props) {
//         super(props);
//
//         history.listen((location, action) => {
//             // clear alert on location change
//             console.log(location,action);
//         });
//     }
//
//     render(){
//         return(
//             <Router history={history}>
//                 <Switch>
//                     <Route exact path="/Home" component={WebOfHome} />
//                 </Switch>
//
//             </Router>
//         )
//     }
//
//
// }
//
// export default BasicRoute;
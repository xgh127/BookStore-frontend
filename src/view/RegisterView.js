import React from "react";
import RegisterForm from "../component/RegisterForm";
import HeaderBar from "../component/HeaderBar";
import Container from "../component/Container";
import SubContainer from "../component/subContainer";


class RegisterView extends React.Component{
    render() {
        return(
          <div className="min-box">

                <HeaderBar Head={"注册"}/>
              <div className="register-box">
                <RegisterForm/>
          </div>
          </div>

        )

    }
}
let theRegisterPage =()=>
{
    return(
       <RegisterView/>
    )
}
export {theRegisterPage};
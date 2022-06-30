import React from "react";
import RegisterForm from "../component/RegisterForm";
import HeaderBar from "../component/Decoration/HeaderBar";
import Container from "../component/Container/Container";
import SubContainer from "../component/Container/subContainer";


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
import React from "react";
import RegisterForm from "../component/Table/RegisterForm";
import HeaderBar from "../component/Decoration/HeaderBar";


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
export {RegisterView};
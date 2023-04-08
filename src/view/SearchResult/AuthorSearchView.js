import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import AuthorSearchResultPage from "../../component/SearchComponent/AuthorSearchResult";

class AuthorSearchView extends React.Component{
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"其他功能"}/>
                <SideBar/>
                <SubContainer elem = {
                    <div>
                        <AuthorSearchResultPage/>
                    </div>
                }>

                </SubContainer>

            </div>
        )
    }
}

export {AuthorSearchView};
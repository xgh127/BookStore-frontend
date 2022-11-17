import React from "react";
import '../../css/basicBackground.css'
import SideBar from "../../component/Decoration/sideBar";
import SubContainer from "../../component/Container/subContainer";
import HeaderBar from "../../component/Decoration/HeaderBar";
import SearchResultPage from "../../component/SearchComponent/GlobalSearchResult";

class GlobalSearchResultView extends React.Component{
    render() {
        return(
            <div className="min-box">
                <HeaderBar Head={"全局搜索"}/>
                <SideBar/>
                <SubContainer elem = {
                    <div>
                    <SearchResultPage/>
                    </div>
                }>

                </SubContainer>

            </div>
        )
    }
}
let theSearchResult = () =>
{
    return(
        <div>

        <GlobalSearchResultView/>
    </div>
    )
}
export {theSearchResult};
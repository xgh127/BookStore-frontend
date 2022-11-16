import {Button, PageHeader} from "antd";
import {history} from "../../utils/history";
import React from "react";

class BackButton extends React.Component{
    render() {
        return(
            <PageHeader><Button size="large" block   onClick={()=>{history.go(-1)}}>返回上一页</Button></PageHeader>
        )
    }
};
export default  BackButton;

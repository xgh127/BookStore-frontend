import React from "react";
import '../css/basicBackground.css'
import { FilterableProductTable2} from "../component/table";
import SubContainer from "../component/subContainer";
import Container from "../component/Container";
import SideBar from "../component/sideBar";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import HeaderBar from "../component/HeaderBar";

class HomeView extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            books:[]
        }
        //定义一个state来获取书籍信息作为参数传给我的FilterableProductTable2组件
    }
    //在渲染的时候获取书籍信息
    componentDidMount()
    {
       let callback =(data) =>          //处理获取的数据
        {
            if(this.state.books == null)//必须要判空，因为state的设置是异步的，你调用setState可能还没有成功设置
            {
                console.log("get nothing");
            }
            else
            {
                this.setState({books:data});
            }
        }
        postRequest(apiURL+'/getBooks',callback);
    }
//返回书籍搜索表
    table1 =()=>{
       console.log("HomeViewData "+this.state.books);
        if(this.state.books == null)
        {
            console.log("empty")
           }
        else
        {
            return(
                <FilterableProductTable2 products={this.state.books}/>
            )
        }

    }
    render()//渲染组件
    {
        return (
                <div>
                    <SubContainer elem={this.table1()}/>
                </div>
        )
    }
}

const TheFirst=()=>
{
    return(
        <div>
            <HeaderBar Head={"首页"}/>
            <Container SideBar={<SideBar/>} Sub={<HomeView/>}/>
        </div>
    )
}
export  {TheFirst};
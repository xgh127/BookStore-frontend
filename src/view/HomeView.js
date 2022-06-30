import React from "react";
import '../css/basicBackground.css'
import { FilterableProductTable2} from "../component/table";
import SubContainer from "../component/Container/subContainer";
import Container from "../component/Container/Container";
import SideBar from "../component/Decoration/sideBar";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";
import HeaderBar from "../component/Decoration/HeaderBar";
import {PriceTrim} from "../Service/bookService";
import {withRouter} from "react-router-dom";

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
                /*数据库中保存的书籍的价格是ing类型的，95.2保存为9520，这里需要重新解析一下！！！！*/
                data = PriceTrim(data);
                this.setState({books:data});
                console.log("HomeViewData "+this.state.books);
            }
        }
        postRequest(apiURL+'/getBooks',callback);
    }
//返回书籍搜索表
    table1 =()=>{
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
                    <HeaderBar Head={"欢迎你,"+localStorage.getItem("username")}/>
                    <Container SideBar={<SideBar/>} Sub={  <SubContainer elem={this.table1()}/>}/>

                </div>
        )
    }
}

export const TheFirst=()=>
{
    return(
        <div>
          <HomeView/>
        </div>
    )
}
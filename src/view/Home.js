import React from "react";
import '../css/basicBackground.css'
import { FilterableProductTable2} from "../component/table";
import SubContainer from "../component/subContainer";
import Container from "../component/Container";
import title from "../picture/logo.png";
import SideBar from "../component/sideBar";
import {postRequest} from "../utils/ajax";
import {apiURL} from "../config/BaseConfig";

function Head_img(){
    return(
        <img className="title"
             src={title}
             alt="title"/>
    ) ;
}
function HeadBar(props){
    return(
        <div className="title-box">
            <Head_img/>
            <h1>{props.Head}</h1>
        </div>
    );
}
const pageHead={
    Head:'首页'
}
const sideBar=<SideBar/>
const header=()=> <HeadBar Head={pageHead.Head}/>//页面头

class Home extends React.Component{

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
       console.log("the book is "+this.state.books);
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
let table_page=() =>{
    return(
        <div>
            <Home/>
        </div>
    )
}
const Pagefirst=()=>
{
    return(
        <div>
            {header()}
            <Container SideBar={sideBar} Sub={table_page()}/>
        </div>
    )
}
const TheFirst=()=>
{
    return(
        <div>
            <Pagefirst/>
        </div>
    )
}
export  {TheFirst};
import React from "react";

import {Collapse, Input, List, Row, Tabs, Typography} from 'antd';

import {BarsOutlined} from "@ant-design/icons";

import GlobalSearchBar from "./GlobalSearchBar";
import SearchBookRow from "./SearchBookRow";
import {urlDecoder} from "../../utils/urlDecoder";
import {getAllBookList, getBookByKeyWord} from "../../Service/bookService";
import BackButton from "../UtilComponet/BackButton";


const { TabPane } = Tabs;
class SearchResultPage extends React.Component{
    searchKeyWord ="";
    searchWay = 0;

    constructor() {
        super();
        let theRequest = urlDecoder(decodeURI(window.location.search));
        //获取url中"?"符后的字串 ('?modFlag=business&role=1')
        this.searchKeyWord = theRequest['keyword'];
        this.searchby = parseInt(theRequest["searchby"]);

        this.state = {
            searchData : [],
        };

        // 抓书 如果搜索的是空白的话抓取所有的内容
        if(this.searchKeyWord !== ""){
            //  全文搜索 描述信息
            getBookByKeyWord(this.searchby,this.searchKeyWord,
                (data)=>{
                    console.log(data);
                    this.setState({
                        searchData :data,
                    });
                });
        }
        else {
            getAllBookList(
                (data)=>{
                    console.log(data);
                    this.setState({
                        searchData :data,
                    });
                }
            );
        }
    }


    render() {
        return (
            <div >

                <div >
                    <GlobalSearchBar/>
                </div>
                <div>
                    <Tabs defaultActiveKey="2">
                        <BackButton/>
                        <TabPane tab={<><BarsOutlined/>列表展示</>} key="2">

                            <List
                                grid={{gutter: 10, column: 1}}
                                dataSource={this.state.searchData}
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 12,
                                }}

                                renderItem={(item) => {
                                    return (
                                        <List.Item>
                                            <SearchBookRow bookInfo={item}/>
                                        </List.Item>
                                    );
                                }}
                            />

                        </TabPane>

                    </Tabs>
                </div>
            </div>
        );
    }
}

export default SearchResultPage;
import React from 'react';
import 'antd/dist/antd.css';

import {
    Input,
    Select,

} from 'antd';
import {
    AudioOutlined,
} from '@ant-design/icons';



const { Search } = Input;
const { Option } = Select;



const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

// const onSearch = value => console.log(value);

class GlobalSearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchWay: 0,
        };

    }

        // 新开一个页面展示搜索结果
        onSearch(value){
            if (this.props.fromPage === "home") {
                const w = window.open('about:blank');
                w.location.href = "searchResult?keyword=" + encodeURI(value) + "&searchby=" + this.state.searchWay;
            }
            else {
                window.location.href = "searchResult?keyword=" + encodeURI(value) + "&searchby=" + this.state.searchWay;
            }
        }

    selectChange(value){
        this.setState(prevState => {
            return {
                searchWay: value,
            };
        });
    }

    render() {

        return(
            <Input.Group compact>
                <Select style={{ width: '15%',textAlign:'center'} } defaultValue="0"
                        onChange={(e) => this.selectChange(e)}>
                    <Option value="0" style={{ textAlign: 'center'}}>简介全文搜索</Option>*/}
                </Select>

                <Search
                    placeholder="请输入想要查询的关键词"
                    enterButton="&nbsp;&nbsp;搜&nbsp;&nbsp;&nbsp;索&nbsp;&nbsp;&nbsp;"
                    size="middle"
                    suffix={suffix}
                    onSearch={(e) => this.onSearch(e) }
                    style={{ width: '85%'}}
                />

            </Input.Group>
        );
    }
}



export default GlobalSearchBar;
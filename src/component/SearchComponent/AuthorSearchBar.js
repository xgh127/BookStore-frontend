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

class AuthorSearchBar extends React.Component{
    constructor(props) {
        super(props);
    }

    // 新开一个页面展示搜索结果
    onSearch(value){
            window.location.href = "AuthorSearchResult?bookName=" + encodeURI(value);
    }


    render() {

        return(

                <Search
                    placeholder="请输入想要查询作者的书籍名称"
                    enterButton="&nbsp;&nbsp;搜&nbsp;&nbsp;&nbsp;索&nbsp;&nbsp;&nbsp;"
                    size="middle"
                    suffix={suffix}
                    onSearch={(e) => this.onSearch(e) }
                    style={{ width: '85%'}}
                />
        );
    }
}



export default AuthorSearchBar;
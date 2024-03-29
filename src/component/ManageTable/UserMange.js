import React from "react";
import {Button, Input, Select, Space, Table, Tabs, Tag} from "antd";
import {getAllUserList, setUserLoginPermit} from "../../Service/UserService";
import { UserOutlined} from "@ant-design/icons";
import { SearchOutlined } from '@ant-design/icons';
import {StatusConst} from "../../Constant/UserConst";
import Highlighter from 'react-highlight-words';

const { Option } = Select;
const { TabPane } = Tabs;

// 处理变更是否允许登录的功能
const handleChange_ForBidLogin = (value,username) => {
    setUserLoginPermit(username,value,(data)=>{console.log(data)});
};



class UserManage extends React.Component{
    searchInput = null;

    constructor() {
        super();
        this.state = {
            userData: [],
            searchText: "",
            searchedColumn: "",
        }
        getAllUserList((data)=>{
            this.setState({
                userData:data.concat([])
            });
            console.log(data);
        });
    }

    setSearchText(val){
        this.setState({ searchText:val});
    }

    setSearchedColumn(val){
        this.setState({ searchedColumn:val});
    }
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setSearchText(selectedKeys[0]);
        this.setSearchedColumn(dataIndex);
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setSearchText('');
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={this.searchInput}
                    placeholder={`Search ${dataIndex}`} value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block',}}
                />
                <Space>
                    <Button
                        type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />} size="small" style={{width: 90,}}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && this.handleReset(clearFilters)} size="small"
                        style={{width: 90,}}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link" size="small"
                        onClick={() => {
                            confirm({closeDropdown: false,});
                            this.setSearchText(selectedKeys[0]);
                            this.setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.current?.select(), 10);
            }
        },
        render: (text) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
            ...this.getColumnSearchProps('username'),
        },
        {
            title: '权限',
            dataIndex: 'userAuth',
            key: 'privilege',
            render: (_, { tags }) => {
                if(parseInt(_.userType) === 0)
                    return (
                        <Tag color={"geekblue"}>超级管理员</Tag>
                    );
                else if(parseInt(_.userType) === 1)
                    return (
                        <Tag color={"green"} >普通用户</Tag>
                    );
            },
        },
        {
            title: '姓名',
            dataIndex: 'nickname',
            key: 'name',
            ...this.getColumnSearchProps('name'),
        },
        {
            title: '电话号码',
            dataIndex: 'tel',
            key: 'telephone',
            ...this.getColumnSearchProps('tel'),
        },
        {
            title: '电子邮件',
            dataIndex: 'mail',
            key: 'email',
            render: (text) => <a href={"mailto:"+text}>{text}</a>,
          ...this.getColumnSearchProps('mail'),
        },

        {
            title: '登录许可',
            dataIndex: 'forbiddenStatus',
            key: 'forbidlogin',
            render: (num,record) => (
            console.log("record="+JSON.stringify(record)),

 <>
                    <Select
                       defaultValue={record.userAuth.forbiddenStatus=== 0 ? "允许" : "禁止" }

                        style={{
                            width: 80,
                        }}
                        onChange={(value )=>handleChange_ForBidLogin(value,record.id)}
                    >
                        <Option label={0} value="0">允许</Option>
                        <Option label={1} value="1">禁止</Option>
                    </Select>
</>

            ),
         },
    ];

    render() {
         console.log(this.state.userData);
        return (
            <div className="eBookPageContainer">
                <div >

                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<><UserOutlined />全局用户管理</>} key="1">
                            <Table columns={this.columns} dataSource={this.state.userData} />
                        </TabPane>

                    </Tabs>


                </div>
            </div>
        );
    }
}

export default UserManage;
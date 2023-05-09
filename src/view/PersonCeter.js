import React from "react";
import '../css/basicBackground.css'
import '../css/personCenter.css'
import SideBar from "../component/Decoration/sideBar";
import SubContainer from "../component/Container/subContainer";
import HeaderBar from "../component/Decoration/HeaderBar";
import { Button, message, Form, Input, Popconfirm } from "antd";
import { PoweroffOutlined } from '@ant-design/icons';
import { UserConst } from "../Constant/UserConst";
import {doLogout, ModifyFrontendUserInfo, ModifyUserInfo} from "../Service/UserService";

const { Item } = Form;

class PersonCenterView extends React.Component {
    formRef = React.createRef();
    state = {
        editMode: false, // 是否处于编辑模式
    };

    handleEdit = () => {
        this.setState({ editMode: true });
    };

    handleSave = () => {
        const form = this.formRef.current;
        form.validateFields().then((values) => {
            if (this.state.editMode) {
                ModifyUserInfo(values, (response) => {
                    if (response!==null) {
                        message.success("用户信息修改成功");
                        form.resetFields();
                        form.setFieldsValue(values); // 更新表单字段的值
                        ModifyFrontendUserInfo(values);
                        console.log("修改后的用户信息", values);
                        this.setState({ editMode: false });
                    } else {
                        message.error("用户信息修改失败");
                    }
                });
            } else {
                this.setState({ editMode: true });
            }
        });
    };

    handleCancel = () => {
        const form = this.formRef.current;
        form.resetFields();
        this.setState({ editMode: false });
    };

    render() {
        const { editMode } = this.state;

        return (
            <div className="min-box">
                <HeaderBar Head={"个人中心"} />
                <SideBar />
                <SubContainer
                    elem={
                        <div>
                            <Form
                                ref={this.formRef}
                                layout="vertical"
                                initialValues={{
                    username: localStorage.getItem(UserConst.USERNAME),
                    nickname: localStorage.getItem(UserConst.NICKNAME),
                    email: localStorage.getItem(UserConst.MAIL),
                    phone: localStorage.getItem(UserConst.TEL),
                    description: localStorage.getItem(UserConst.DESCRIPTION),
                }}
                                bordered
                            >
                                <Item label="用户名" name="username" span={6} >
                                    <Input disabled className = "custom-input"/>
                                </Item>
                                <Item label="昵称" name="nickname" span={5}>
                                    <Input disabled={!editMode} className = "custom-input"/>
                                </Item>
                                <Item label="电话" name="phone" span={5}>
                                    <Input disabled={!editMode} className = "custom-input"/>
                                </Item>
                                <Item label="邮箱" name="email" span={5}>
                                    <Input disabled={!editMode}  className = "custom-input"/>
                                </Item>
                                <Item label="简介" name="description">
                                    <Input.TextArea disabled={!editMode} className = "custom-input"/>
                                </Item>
                                {editMode ? (
                                    <Item>
                                        <Button type="primary" onClick={this.handleSave}>
                                            保存
                                        </Button>
                                        <Button style={{ marginLeft: "8px" }} onClick={this.handleCancel}>
                                            取消
                                        </Button>
                                    </Item>
                                ) : (
                                    <Item>
                                        <Button type="primary" onClick={this.handleEdit}>
                                            编辑
                                        </Button>
                                    </Item>
                                )}
                            </Form>
                            <Button icon={<PoweroffOutlined />} danger onClick={doLogout}>
                                退出登陆
                            </Button>
                            <br />
                        </div>
                    }
                />
            </div>
        );
    }
}

export { PersonCenterView };

import React from 'react';
import 'antd/dist/antd.css';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Select,
} from 'antd';
import {formItemLayout,tailFormItemLayout} from "../../utils/Format"
import { useState } from 'react';
import {apiURL, frontURL} from "../../config/BaseConfig";
import {getRequest} from "../../utils/ajax";
import {NotifyErrorMsg, NotifySuccessMsg} from "../../Message/LoginMessage";
const { Option } = Select;


const RegisterForm = () => {
    const [form] = Form.useForm();
/**
 * 注册完成后的跳转函数
 * */
    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        getRequest(apiURL+"/register",values,(resp)=>{
            if (resp.status >= 0)
            {
                NotifySuccessMsg(resp.msg);
                window.location.href=frontURL+"/registerSuccess";
            }
            else
            {
                NotifyErrorMsg(resp.msg);
            }
        })
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    /**
     * 回到登陆页面
     * */
    let toLogin =() =>
    {
        window.location.href=frontURL+"/";
    }
    const [autoCompleteResult] = useState([]);
    autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="nickname"
                label="昵称"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="username"
                label="用户名"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="密码"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="再次输入密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="email"
                label="邮箱"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="phone"
                label="电话号码"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item
                name="intro"
                label="个人简介"
                rules={[
                    {
                        required: true,
                        message: 'Please input Intro',
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            <Form.Item
                name="gender"
                label="性别"
                rules={[
                    {
                        required: true,
                        message: 'Please select gender!',
                    },
                ]}
            >
                <Select placeholder="select your gender">
                    <Option value="1">男</Option>
                    <Option value="0">女</Option>
                    <Option value="-1">其它</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                   我已阅读并同意<a href="">协议</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    进行注册
                </Button>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button  htmlType="submit" onClick={toLogin}>
                    已有账号，返回登陆
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
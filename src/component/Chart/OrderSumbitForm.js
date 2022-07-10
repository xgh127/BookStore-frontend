import {Form} from "antd";
import {formItemLayout} from "../../assert/Format";
import Input from "antd/es/input/Input";
import React from "react";

class SubmitForm extends React.Component {
    formRef = React.createRef();
    render() {
        return(
        <Form  {...formItemLayout}>
            <Form.Item name="receiverName" label="收件人姓名"   rules={[
                {
                    validator:(_,value)=> {
                        if (value.length === 0) {
                            return Promise.reject("收件人姓名不能为空")
                        } else if (value.length > 20) {
                            return Promise.reject("输入的收件人名字太长");
                        }
                    }
            },
                {
                    required:true,
                    message:"请输入收件人姓名"
                },
                ]
            }>
                <Input type="text" id="receiverName" placeholder="收件人姓名"/>
            </Form.Item>
            <Form.Item name="address" label="收件地址" rules={[
                {
                    required:true,
                    message: '请输入收件地址!',
                },]}
            >
                <Input id="address" placeholder="收件地址"/>
            </Form.Item>
            <Form.Item name = "postcode" label="邮编" rules={[
                {
                    required: true,
                    message: '请输入邮政编码',
                },//！！！控制只能输入数字的规则在下面
                () =>({
                validator(rule,value){
                if(/\d{6}/.test(value)){//if中是正则表达是,判断是否是6位数字
                return Promise.resolve();
            }
                else
            {
                return Promise.reject("请输入6位邮政编码");//如果违反规则，就会给出提示
            }
            }
            }),]}>
                <Input type="text" id="postcode" placeholder="邮编"/>
            </Form.Item>
            <Form.Item name="phoneNumber" label="电话号码" rules={[
                {
                    required: true,
                    message: '请输入收件人电话号码!',
                },
                () =>({
                    validator(rule,value){
                        if(/^1[3-9]\d{9}/.test(value)){
                            return Promise.resolve();
                        }
                        else
                        {
                            return Promise.reject("请输入正确的手机号");
                        }
                    }
                })]} >
                <Input  id="phoneNumber" placeholder="电话号码" />
            </Form.Item >

        </Form > )
    }
}
export default SubmitForm;
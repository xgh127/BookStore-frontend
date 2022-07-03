import {Form} from "antd";
import {formItemLayout} from "../../assert/Format";
import Input from "antd/es/input/Input";
import React from "react";
class SubmitForm extends React.Component {
    render() {
        return(
        <Form {
                  ...
                      formItemLayout
              }

        >

            <Form.Item label="收件人姓名" rules={[
                {
                    required: true,
                    message: '请输入收件人姓名!',
                },]}>
                <Input type="text" id="receiverName" placeholder="收件人姓名"/>
            </Form.Item>
            <Form.Item label="收件地址" rules={[
                {
                    required: true,
                    message: 'Please input your address!',
                },]}
            >
                <Input id="address" placeholder="收件地址"/>
            </Form.Item>
            <Form.Item label="邮编" rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },]}>
                <Input type="text" id="postcode" placeholder="邮编"/>

            </Form.Item>
            <Form.Item label="电话号码" rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },]}>
                <Input type="text" id="phoneNumber" placeholder="电话号码"/>
            </Form.Item>
        </Form>)
    }
}
export default SubmitForm;
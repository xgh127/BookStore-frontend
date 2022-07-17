import React from "react";
import {Tabs, Form, Input, InputNumber, Button, Select} from "antd";
import {ShopOutlined} from "@ant-design/icons";
//import FileUploader from "../../../components/Book/BookImgUploader";
import TextArea from "antd/es/input/TextArea";
import {AddOneBook} from "../../Service/bookService";


const { TabPane } = Tabs;

class newBook extends React.Component{
    imgUrl = "";
    formRef = React.createRef();

    onFinish = (values) => {
        let sendData = values;

        console.log(sendData);
        AddOneBook(sendData,(data) => {
            if(data.status >= 0)
                window.location.href = "/Admin/PublishBookSuccess";
            else
                window.location.href = "/Error";
        });
    };

    render() {
        return (
                            <Form labelCol={{span: 3, offset: 1}} wrapperCol={{span: 10, offset: 1}}
                                  onFinish={this.onFinish} ref={this.formRef}
                            >

                                {/*<Form.Item label="封面上传" name="imgtitle" valuePropName="fileList"*/}
                                {/*           rules={[{*/}
                                {/*               required: true,*/}
                                {/*               message: '需要上传书籍的封面!',*/}
                                {/*           },]}*/}
                                {/*>*/}
                                {/*    <FileUploader parentNode={this}/>*/}
                                {/*</Form.Item>*/}

                                <Form.Item label="书籍价格" name="price"
                                           rules={[{
                                               required: true,
                                               message: '需要输入书籍的价格信息!',
                                           },]}
                                >
                                    <InputNumber prefix="￥" step="0.01" min="0"
                                                 style={{width: 130,}} precision={2} defaultValue={0}
                                    />
                                </Form.Item>

                                <Form.Item label="书籍库存" name="inventory"
                                           rules={[{
                                               required: true,
                                               message: '需要输入书籍的库存信息!',
                                           },]}
                                >
                                    <InputNumber step="1" min="0" style={{width: 130,}} defaultValue={0}
                                    />
                                </Form.Item>

                                <Form.Item label="书本名称" name="bookName"
                                           rules={[{
                                               required: true,
                                               message: '需要输入书籍的名称信息!',
                                           },]}
                                >
                                    <Input placeholder="用于归档备案，尽可能简洁，如:西游记"/>
                                </Form.Item>
                                <Form.Item label="书本ISBN" name="ISBN"
                                           rules={[{
                                               required: true,
                                               message: '需要输入书籍的ISBN信息!',
                                           },]}
                                >
                                    <Input placeholder="样例:978-7-000-00000-0"/>
                                </Form.Item>
                                <Form.Item label="书籍作者" name="author"
                                           rules={[{
                                               required: true,
                                               message: '需要输入书籍的作者信息!',
                                           },]}
                                >
                                    <Input placeholder="填写书本作者"/>
                                </Form.Item>
                                <Form.Item label="书籍分类" name="type"
                                            rules={[{
                                                required:true,
                                                message:"请输入书籍的分类",
                                            },]}>
                                    <Input placeholder = "填写本书的分类，比如编程，儿童文学"/>
                                </Form.Item>

                                <Form.Item label="详情描述" name="description"
                                           rules={[{
                                               required: true,
                                               message: '需要输入书籍的简介信息!',
                                           },]}
                                >
                                    <TextArea rows={5} placeholder="填写书籍的详情介绍，内容目录等"/>
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                        发布商品
                                    </Button>
                                </Form.Item>
                            </Form>
        );
    }
}

export default newBook;
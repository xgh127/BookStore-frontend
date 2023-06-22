import React from "react";
import {Tabs, Form, Input, InputNumber, Button, Image} from "antd";
import {ShopOutlined} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {BookPriceTrim, editOneBook, getBookByID, parseBookId} from "../../Service/bookService";
import {history} from "../../utils/history";

const { TabPane } = Tabs;
class EditBook extends React.Component{

    targetbookid = 0;
    constructor() {
        super();

        this.state = {
            bookID: 0,          // 书本的ID
            bookName: "",
            bookAuthor: "",
            bookISBN: "",
            bookRemainNum: 0,
            bookPlace: "",
            bookSellnum: 0,
            bookPrice: 0,
            bookDescription: "",
            imageUrl: "",
        }

        this.targetbookid = window.location.href.split("?id=")[1];
        if(this.targetbookid!==0){
            let that = this;
            getBookByID(this.targetbookid,(resp) => {
                    let data = BookPriceTrim(resp);
                    that.setState({
                        bookID: this.targetbookid,
                        bookName:  data.name,
                        bookAuthor: data.author,
                        bookRemainNum: data.inventory,
                        bookSellNum: data.sellNum,
                        bookPrice: data.price,
                        bookISBN: data.isbn,
                        bookDescription: data.description,
                        imageUrl:data.image,
                        bookType:data.type,
                    });

                    that.formRef.current.setFieldsValue(
                        {
                            url:        data.image,
                            price:       data.price,
                            inventory:  data.inventory,
                            bookName:   data.name,
                            ISBN:       data.isbn,
                            author:     data.author,
                            description:data.description,
                            type:      data.type,
                        }
                    );
                }
            );
        }
        else{
            window.location.href = "/eBook/errorPage";
        }
    }

    imgUrl = "";
    formRef = React.createRef();

    onFinish = (values) => {
        let sendData = values;
        sendData["bookID"]=this.state.bookID;
        editOneBook(sendData, (data) => {
                if(data.status >= 0){
                    window.location.href = "/Admin/editBookSuccess?" + data.data.id;
                }
                else
                    window.location.href = "/Error";
             }
         );

   };
    backUp=()=>
    {
        history.go(-1);
    }

    render() {
        console.log(this.state);
            return (

                        <Tabs defaultActiveKey="1">
                            <TabPane tab={<><ShopOutlined />编辑书籍信息</> } key="1">


                                <Form labelCol={{span: 3, offset: 1}} wrapperCol={{span: 10, offset: 1}}
                                      onFinish={this.onFinish} ref={this.formRef}
                                >
                                    <Form.Item label="封面更新" name="url"
                                               rules={[{
                                                   required: true,
                                                   message: '输入新的书籍封面链接!',
                                               },]}>
                                      <Input placeholder="输入新的书籍封面链接"/>
                                    </Form.Item>
                                    <Form.Item label="书本名称" name="bookName"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的名称信息!',
                                               },]}
                                    >
                                        <Input placeholder="用于归档备案，尽可能简洁，如:西游记"/>
                                    </Form.Item>
                                    <Form.Item label="分类" name="type"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的分类!',
                                               },]}
                                    >
                                        <Input placeholder="比如编程"/>
                                    </Form.Item>

                                    <Form.Item label="书籍价格" name="price"
                                               rules={[{
                                                   required: true,
                                                   message: '需要输入书籍的价格信息!',
                                               },]}
                                    >
                                        <InputNumber prefix="￥" step="1" min="0"
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
                                            保存
                                        </Button>
                                        <Button onClick={this.backUp}>返回上一页</Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>

                        </Tabs>
            );
        }

}

export default EditBook;
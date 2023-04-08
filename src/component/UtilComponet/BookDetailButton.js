import React from "react";
import {Button} from "antd";
import {frontURL} from "../../config/BaseConfig";

class BookDetailButton extends React.Component {
    render() {
        return(
            <Button type="link" onClick={()=>{window.location.href=frontURL+"/detail?id="+this.props.bookId}}>{this.props.text}</Button>
        )
    }
}
export {BookDetailButton};

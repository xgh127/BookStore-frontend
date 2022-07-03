import { Button, Result } from 'antd';
import React from 'react';
import {frontURL} from "../../config/BaseConfig";

class ResultOfOrder extends React.Component {

gotoChart=()=>
{
    window.location.href=frontURL+"/chart"
}
    render()
    {

        return(
            <Result
                status="success"
                title="您已成功支付"
                subTitle={"订单号:"+ this.props.orderID+"，您可前往 >我的订单< 查看"}
                extra={[
                    <Button type="primary"  onClick={this.gotoChart}>
                     继续购买
                    </Button>
                ]}
            />
        )
    }

};

export default ResultOfOrder;
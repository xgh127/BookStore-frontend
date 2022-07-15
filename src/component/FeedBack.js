import { Button, Result } from 'antd';
import React from 'react';
import {history} from "../utils/history";

class FeedBack extends React.Component {
    constructor(props) {
        super(props);
    }
    render()
    {
        return(
            <Result
                status={this.props.status}
                title={this.props.title}
                subTitle={this.props.pre+ this.props.ID+this.props.help}
                extra={[
                    <Button type="primary"  onClick={this.props.function}>
                     继续
                    </Button>
                ]}
            />
        )
    }

};

export default FeedBack;
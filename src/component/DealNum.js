import React from 'react';

class NumComponent extends React.Component{
    static defaultProps={
        maxValue:-1
    }
    constructor(props) {
        super(props);
        this.state={value:this.props.initval};

    }
    increaseNum=()=>{
        let val=this.state.value;
        if(this.props.maxValue!==-1)
            val=(val+1>this.props.maxValue)?val:val+1
        else
            val=val+1
        this.setState({value:val});
        this.props.numChange(val,this.props.idx)

    }

    decreaseNum=()=>{
        let val=this.state.value;
        this.setState({value:this.state.value-1<1?1:this.state.value-1})
        this.props.numChange(val-1<1?1:val-1,this.props.idx);
    }

    changeNum=(e)=>{
        let val= e.target.value;
        this.setState({value:val});
        this.props.numChange(val,this.props.idx);
    }
    render=() =>{
        return(
            <div style={{display:"inline-block"}}>
                <button onClick={this.decreaseNum}>-</button>
                <input style={{width:'20px',textAlign:'center'}} value={this.state.value} onChange={this.changeNum}/>
                <button onClick={this.increaseNum}>+</button>
            </div>
        );
    }

}
export {NumComponent}
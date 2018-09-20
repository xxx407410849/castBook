import React from 'react'
import moment from 'moment'
import '../Less/labelTips.less'
/*
@Signtype : type,
@Nametype : name,
@value : value,
@time : time
@clickEvent : Click
@id : id
@color : color
*/
class Labeltipscomponent extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.color);
        return (
            <div className = "labelTips-ctn" onClick = {(id)=>{this.props.Click(id)}} style = {{borderColor : this.props.color}}>
                <span className = "labelTips-type" style = {{color : this.props.color}}><i className = {"icon-" + this.props.type}></i>{this.props.name}</span>
                <div className = "labelTips-time">{moment(this.props.time,'YY-MM-DD h:mm:ss').format("YY-MM-DD HH:mm")}</div>
                <span className = "lableTips-value">{"支出: "+this.props.value}</span>
            </div>
        )
    }
}
module.exports = Labeltipscomponent
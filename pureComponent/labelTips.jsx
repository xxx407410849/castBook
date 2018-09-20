import React from 'react'
/*
@Signtype : type,
@Nametype : name,
@value : value,
@time : time
@clickEvent : Click
@id : id
*/
class Labeltipscomponent extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            type : this.props.type,
            name : this.props.name,
            value : this.props.value,
            time : this.props.time,
            id : this.props.id
        }
    }

    render(){
        return (
            <div className = "labelTips-ctn" onClick = {(id)=>{this.props.Click(id)}}>
                <span className = "labelTips-type"><i className = {"icon-" + this.state.type}></i>{this.state.name}</span>
                <span className = "labelTips-time">{this.state.time}</span>
                <span classNmae = "lableTips-value">{this.state.value}</span>
            </div>
        )
    }
}
module.exports = Labeltipscomponent
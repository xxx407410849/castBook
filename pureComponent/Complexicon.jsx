import React from 'react'
import '../Less/icon.less'
/*
@name(chinese) : name
@type(english) : type
@clickEvent : Click
@color : color
*/
class Complexiconcomponent extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div  className = {this.props.checkClick ? "complex-icon-ctn icon-click" : "complex-icon-ctn"}  onClick = {()=>{this.props.Click(this.props.name,this.props.type,this.props.color)}}>
            <span className = "complex-icon-name" style = {{color : this.props.color}}>{this.props.name}</span>
            <span><i className = {"icon-" + this.props.type}></i> </span>
            </div>
        )
    }
}

module.exports = Complexiconcomponent;
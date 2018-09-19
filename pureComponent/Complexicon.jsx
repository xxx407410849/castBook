import React from 'react'

/*
@name(chinese) : name
@type(english) : type
@clickEvent : Click
*/
class Complexiconcomponent extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            type : this.props.type,
        }
    }
    render(){
        return (
            <div className = "complex-icon-ctn" onClick = {()=>{this.props.Click(this.state.name,this.state.type)}}>
            <span className = "complex-icon-name">{this.props.name}</span>
            <span><i className = {"icon-" + this.props.type}></i> </span>
            </div>
        )
    }
}

module.exports = Complexiconcomponent;
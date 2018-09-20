import React from 'react'
import Complexiconcomponent from '../pureComponent/Complexicon.jsx'
import Btncomponent from '../pureComponent/btn.jsx'
import Immutable from 'immutable'
import moment from 'moment'
class AddCast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataList : this.props.dataList,
            value : 0,
            type : "other",
            name : "其他",
            tips : ""
        }
    }
    addClickHandle(e){
        if(!Number(this.state.value))console.log("非法");

        let array = Immutable.fromJS({
            tip : this.state.tips,
            value : this.state.value,
            type : this.state.type,
            name : this.state.name,
            time : moment().format('YY-MM-DD h:mm:ss')
        });

        this.props.addCast(array);
    }
    iconClickHandle(name,type){
        console.log(name,type)
        this.setState({
            type : type,
            name : name
        })
    }
    areaChangeHandle(e){
        this.setState({
            tips : e.target.value
        })
    }
    iptChangeHandle(e){
        this.setState({
            value : e.target.value
        })
    }
    render(){
        return (
            <div className = "AddCast-ctn">
                <div className = "panel-chooseType">
                    {
                        this.state.dataList.map((item,idx)=>{
                            return (
                            <Complexiconcomponent name = {item.get('name')} type = {item.get('type')} Click = {(name,type)=>{this.iconClickHandle(name,type)}} key = {item.get('type')}/>
                            )
                        })
                    }
                </div>
                <div className = "panel-setTip">
                    <textarea className = "textArea-tips" onChange = {(e)=>{this.areaChangeHandle(e)}} value = {this.state.tips}></textarea> 
                </div>
                <div className = "panel-setValue">
                    <input type="text" className = "ipt-values" onChange = {(e)=>{this.iptChangeHandle(e)}} value = {this.state.value}/>
                    <Btncomponent Model = "span" name = "提交" Click = {(name,type)=>{this.addClickHandle(name,type)}}/>
                </div>
            </div>
        )
    }
}
module.exports = AddCast
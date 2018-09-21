import React from 'react'
import Complexiconcomponent from '../pureComponent/Complexicon.jsx'
import Btncomponent from '../pureComponent/btn.jsx'
import Immutable from 'immutable'
import moment from 'moment'
class AddCast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0,
            type : "other",
            name : "其他",
            tips : "",
            color : "#1f77b4",
            panelTipsValue : '$消费金额$',
            panelTipsCheck : false
        }
    }
    addClickHandle(e){
        if(!Number(this.state.value)){
            this.setState({
                panelTipsValue : '*非法输入*',
                panelTipsCheck : true
            })
        }else{
            this.setState({
                panelTipsValue : '$消费金额$',
                panelTipsCheck : false
            })
            let array = Immutable.fromJS({
                tip : this.state.tips,
                value : Number(this.state.value),
                type : this.state.type,
                name : this.state.name,
                time : moment().format('YY-MM-DD h:mm'),
                color : this.state.color
            });
            this.props.addCast(array);
            this.props.addTypeValue(this.state.type,Number(this.state.value));
        }
    }
    iconClickHandle(name,type,color){
        this.props.setCastType(type);
        this.setState({
            type : type,
            name : name,
            color : color
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
    iptOnBlurHandle(e){
        if(!Number(e.target.value)){
            this.setState({
                panelTipsValue : '*非法输入*',
                panelTipsCheck : true
            })
        }else{
            this.setState({
                panelTipsValue : '$消费金额$',
                panelTipsCheck : false
            })
        }
    }
    render(){
        return (
            <div className = "AddCast-ctn">
                <div className = "panel-chooseType">
                    {
                        this.props.dataList.map((item)=>{
                            return (
                            <Complexiconcomponent checkClick = {item.get('checkClick')} name = {item.get('name')} type = {item.get('type')} Click = {(name,type,color)=>{this.iconClickHandle(name,type,color)}} key = {item.get('type')} color = {item.get('color')}/>
                            )
                        })
                    }
                </div>
                <hr />
                <div className = "panel-setTip">
                    <p className = "textArea-name"><span>备注:</span></p>
                    <textarea className = "textArea-tips" onChange = {(e)=>{this.areaChangeHandle(e)}} value = {this.state.tips}></textarea> 
                </div>
                <hr />
                <div className = "panel-setValue">
                    <span className = {this.state.panelTipsCheck ? "panel-value-label panel-value-label-error" : "panel-value-label"}  >{this.state.panelTipsValue}</span>
                    <input type="text" className = "ipt-values" onChange = {(e)=>{this.iptChangeHandle(e)}} value = {this.state.value} onBlur = {(e)=>{this.iptOnBlurHandle(e)}}/>
                    <Btncomponent Model = "span" name = "提交" Click = {(name,type)=>{this.addClickHandle(name,type)}}/>
                </div>
            </div>
        )
    }
}
module.exports = AddCast
import React from 'react'
import Labeltipscomponent from '../pureComponent/labelTips.jsx'
import Piechartcomponent from '../pureComponent/pieChart.jsx'

class ShowCast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataList : this.props.dataList,
            pieData : []
        }
    }
    listClickHandle(id){
        let itemData = this.state.dataList.forEach((item)=>{
            if(item.get('id') == id)return item
        });
        console.log(itemData);
    }
    componentWillMount(){
        let pieData = this.state.dataList.map((item)=>{
            return [item.get('name'),item.get('value')]
        });
        console.log(pieData);
        this.setState({
            pieData : pieData
        })
    }
    render(){
        console.log(1);
        console.log(this.state.dataList);
        return (
            this.state.dataList.map((item,idx)=>{
                return <Labeltipscomponent 
                key = {item.get('id')} 
                type = {item.getIn['item','type']} 
                name = {item.getIn['item','name']} 
                value = {item.getIn['item','value']}
                time = {item.getIn['item','time']}
                id = {item.getIn['item','id']}
                Click = {(id)=>{this.listClickHandle(id)}}
                />
            })
        )
    }
}

module.exports = ShowCast;
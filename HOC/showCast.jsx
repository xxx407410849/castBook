import React from 'react'
import Labeltipscomponent from '../pureComponent/labelTips.jsx'
import Piechartcomponent from '../pureComponent/pieChart.jsx'

class ShowCast extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pieData : [

            ]
        }
    }
    listClickHandle(id){
        let itemData = this.props.dataList.forEach((item)=>{
            if(item.get('id') == id)return item
        });
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            pieData : nextProps.pieData
        })
    }
    render(){
        return (
            <div>
                <Piechartcomponent width = {300} height = {300} dataList = {this.state.pieData} />
                {
                    this.props.dataList.map((item)=>{
                        return <Labeltipscomponent 
                            key = {item.get('id')}
                            name = {item.getIn(['item','name'])}
                            value = {item.getIn(['item','value'])}
                            time = {item.getIn(['item','time'])}
                            id = {item.get('id')}
                            Click = {(id)=>this.listClickHandle(id)}
                            color = {item.getIn(['item','color'])}
                        />
                    })
                }
            </div>

        )
    }
}

module.exports = ShowCast;
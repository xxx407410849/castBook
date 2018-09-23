import React from 'react'
import Labeltipscomponent from '../pureComponent/labelTips.jsx'
import Piechartcomponent from '../pureComponent/pieChart.jsx'
import {Link} from 'react-router-dom'
class ShowCast extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
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
    render(){
        return (
            <div>
                <div className = "pie-ctn">
                    <Piechartcomponent width = {300} height = {300} dataList = {this.props.pieData} />                    
                </div>
                <hr/>
                <div className = 'castAdd-link-ctn'>
                    <Link to = '/addCast' className = "castAdd-link">记一笔</Link>
                </div>
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
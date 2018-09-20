import {connect} from 'react-redux'
import ShowCast from '../HOC/showCast.jsx'
const mapStateToProps = (state) => {
    let pieData = [];
    state.get('types').forEach((item)=>{
        if(item.get('value') != 0){
            pieData.push([item.get('name'),item.get('value'),item.get('color')])
        } 
    });
    return {
        dataList : state.get('Casts'),
        pieData : pieData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
const IndexShowCast = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowCast)

module.exports = IndexShowCast
import {connect} from 'react-redux'
import {changeCast,addCast,setCastType} from '../Action/caseAction.jsx'
import {addTypeValue} from '../Action/typeAction.jsx'
import AddCast from '../HOC/addCast.jsx'
const mapStateToProps = (state) => {
    return {
        dataList : state.get('types')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCast : (id,item) => dispatch(changeCast(id,item)),
        addCast : (item) => dispatch(addCast(item)),
        addTypeValue : (typeName,value) => dispatch(addTypeValue(typeName,value)),
        setCastType : (typeName) => {dispatch(setCastType(typeName))}
    }
}

const ACcast = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCast)

module.exports = ACcast
import {connect} from 'react-redux'
import {changeCast,addCast} from '../Action/caseAction.jsx'
import AddCast from '../HOC/addCast.jsx'
const mapStateToProps = (state) => {
    return {
        dataList : state.get('types')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCast : (id,item) => dispatch(changeCast(id,item)),
        addCast : (item) => dispatch(addCast(item))
    }
}

const ACcast = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCast)

module.exports = ACcast
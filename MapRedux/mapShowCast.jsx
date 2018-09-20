import {connect} from 'react-redux'
import ShowCast from '../HOC/showCast.jsx'
const mapStateToProps = (state) => {
    return {
        dataList : state.get('Casts')
    }
}

const IndexShowCast = connect(
    mapStateToProps,
)(ShowCast)

module.exports = IndexShowCast
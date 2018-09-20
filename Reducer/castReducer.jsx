import {
    DELETE_CAST,
    CHANGE_CAST,
    ADD_CAST
} from '../Action/caseAction.jsx'
import Immutable from 'immutable'
import {combineReducers} from 'redux-immutable'
const types = (state = Immutable.fromJS([]) , action) => {
    return state;
}
const Casts = (state = Immutable.fromJS([]) , action) => {
    switch(action.type){
        case DELETE_CAST : {
            let index;
            state.map((item,idx)=>{
                if(item.get('id') === action.id) index = idx;
            });
            return state.remove(index);
        }
        case CHANGE_CAST : {
            let index;
            state.map((item,idx)=>{
                if(item.get('id') === action.id) index = idx;
            });
            return state.set(index,Immutable.fromJS({
                id : action.id,
                item : action.item
            }))
        }
        case ADD_CAST : {
            return state.push(Immutable.fromJS({
                id : action.id,
                item: action.item
            }))
        }
        default : return state
    }
}

const App = combineReducers({
    Casts,
    types
})

module.exports = App
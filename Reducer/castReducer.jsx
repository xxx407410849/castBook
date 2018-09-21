import {
    DELETE_CAST,
    CHANGE_CAST,
    ADD_CAST,
    SET_CASE_TYPE
} from '../Action/caseAction.jsx'
import {
    DELETE_TYPE,
    ADD_TYPE_VALUE,
    ADD_TYPE,
    SUB_TYPE_VALUE,
} from '../Action/typeAction.jsx'
import Immutable from 'immutable'
import {combineReducers} from 'redux-immutable'
const types = (state = Immutable.fromJS([]) , action) => {
    switch(action.type){
        case DELETE_TYPE : {
            let index;
            state.map((item,idx)=>{
                if(item.get('type') === action.typeName) index = idx;
            })
            return state.remove(index);
        }
        case ADD_TYPE_VALUE : {
            let index;
            state.map((item,idx)=>{
                if(item.get('type') === action.typeName) index = idx;
            })
            return state.setIn([index,'value'],action.value + state.getIn([index,'value']))
        }
        case SUB_TYPE_VALUE : {
            let index;
            state.map((item,idx)=>{
                if(item.get('type') === action.typeName) index= idx;
            })
            return state.setIn([index,'value'], state.getIn([index,'value']) - action.value)
        }
        case ADD_TYPE : {
            return state.push(action.item);
        }
        case SET_CASE_TYPE : {
            return state.map((item)=>{
                if(item.get('type') === action.typeName) return item.set('checkClick',true);
                else return item.set('checkClick',false);
            })
        }
        default : return state
    }
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
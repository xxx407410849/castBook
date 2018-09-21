export const ADD_CAST = 'ADD_CAST'
export const DELETE_CAST = 'DELETE_CAST'
export const CHANGE_CAST = 'CHANGE_CAST'
export const SET_CASE_TYPE = 'SET_CASE_TYPE'

let id = 0;

export const addCast = (item)=>{
    return {type: ADD_CAST , id : id++ , item}
}
export const deleteCast = (id)=>{
    return {type: DELETE_CAST , id : id}
}
export const changeCast = (id,newItem)=>{
    return {type: CHANGE_CAST , id : id ,item}
}
export const setCastType = (typeName)=>{
    return {type: SET_CASE_TYPE , typeName : typeName}
}
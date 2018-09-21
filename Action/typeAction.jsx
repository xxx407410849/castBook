export const ADD_TYPE = 'ADD_TYPE'
export const DELETE_TYPE = 'DELETE_TYPE'
export const ADD_TYPE_VALUE = 'ADD_TYPE_VALUE'
export const SUB_TYPE_VALUE = 'SUB_TYPE_VALUE'
export const addType = (item)=>{
    return {type : ADD_TYPE , item : item}
}

export const deleteType = (typeName)=>{
    return {type : DELETE_TYPE , typeName : typeName}
}

export const addTypeValue = (typeName,value)=>{
    return {type : ADD_TYPE_VALUE , typeName : typeName , value : value}
}

export const subTypeValue = (typeName,value)=>{
    return {type : SUB_TYPE_VALUE , typeName : typeName , value : value}
}



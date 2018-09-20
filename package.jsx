import React from 'react';
import ReactDom from 'react-dom';
import {Router,BrowserRouter,Link,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Provider} from 'react-redux'
import store from './Store/castStore.jsx';
import Immutable from 'immutable';
import {combineReducers} from 'redux-immutable';


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

const MyLoadingComponent = ( {isLoding,error} )=>{
    if(isLoding){
        return <div>Loding...</div>
    }else if(error){
        return <div>This page is Error</div>
    }else return null;
}

const ACcast = Loadable({
    loader: () => import("./MapRedux/mapAddCast.jsx"),
    loading: MyLoadingComponent
})

const IndexShowCast = Loadable({
    loader: () => import("./MapRedux/mapShowCast.jsx"),
    loading : MyLoadingComponent
})

class IndexComponent extends React.Component{
    render(){
        return (
            <div>
                <ACcast />
                <IndexShowCast />
            </div>
        )
    }
}
ReactDom.render(
    <Provider store = {store}>
        <IndexComponent />
    </Provider>,
    document.getElementById('root')
)
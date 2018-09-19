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
unsubscribe();

const MyLoadingComponent = ( {isLoding,error} )=>{
    if(isLoding){
        return <div>Loding...</div>
    }else if(error){
        return <div>This page is Error</div>
    }else return null;
}

const Pie = Loadable({
    loader: () => import('./pureComponent/pieChart.jsx'),
    loading: MyLoadingComponent
});

ReactDom.render(
    <div>
        <Pie width = {300} height = {300} dataList = {[["xx",2],["yy",3],["zz",4],["dd",5]]} />
    </div>,
    document.getElementById('root')
)
import React from 'react';
import ReactDom from 'react-dom';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Provider} from 'react-redux'
import store from './Store/castStore.jsx';
import './Less/index.less';
import './Font/iconfont.css';
import Immutable from 'immutable';


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

/*class AddCastComponent extends React.Component{
    render(){
        return (
        )
    }
}*/
ReactDom.render(
    <BrowserRouter basename = "/dist/view/index.html">
        <Provider store = {store}>
        <div>
            <Switch>
                <Route exact path = "/" component = {IndexShowCast}/>
                <Route exact path = "/addCast" component = {ACcast}/>
            </Switch>
        </div>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
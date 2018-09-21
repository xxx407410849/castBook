import {createStore} from 'redux'
import App from '../Reducer/castReducer.jsx'
import Immutable from 'immutable'
let initTypeData = Immutable.fromJS([
    {name : "其他", type : "other" , value : 0 , color : "#1f77b4" ,checkClick : false},
    {name : "餐饮", type : "food" , value : 0 , color : "#aec7e8",checkClick : false},
    {name : "水果", type : "fruit" , value : 0 , color : "#ff7f0e",checkClick : false},
    {name : "出行", type : "trip" , value : 0 , color : "#ffbb78",checkClick : false},
    {name : "购物", type : "buy" , value : 0 , color : "#2ca02c",checkClick : false},
    {name : "娱乐", type : "play" , value : 0 , color : "#98df8a",checkClick : false},
    {name : "学习", type : "study" , value : 0 , color : "#d62728",checkClick : false},
    {name : "生活缴费", type : "live" , value : 0, color : " #ff9896",checkClick : false},
    {name : "烟酒茶", type : "somoke", value : 0, color : "#9467bd",checkClick : false},
    {name : "零食", type : "extrafood", value : 0, color : "#c5b0d5",checkClick : false},
    {name : "医疗", type : "medic", value : 0, color : "#bcbd22",checkClick : false},
    {name : "服饰", type : "clothes", value : 0, color : " #17becf",checkClick : false},
    {name : "日用品", type : "daybuy", value : 0, color : "#9edae5",checkClick : false}
]);
let store = createStore(App,Immutable.fromJS({types : initTypeData}));

module.exports = store

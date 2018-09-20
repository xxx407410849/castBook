import {createStore} from 'redux'
import App from '../Reducer/castReducer.jsx'
import Immutable from 'immutable'
let initTypeData = Immutable.fromJS([
    {name : "其他", type : "other"},
    {name : "餐饮", type : "food"},
    {name : "水果", type : "fruit"},
    {name : "出行", type : "trip"},
    {name : "购物", type : "buy"},
    {name : "娱乐", type : "play"},
    {name : "学习", type : "study"},
    {name : "生活缴费", type : "live"},
    {name : "烟酒茶", type : "somoke"},
    {name : "零食", type : "extrafood"},
    {name : "医疗", type : "medic"},
    {name : "服饰", type : "clothes"},
    {name : "日用品", type : "daybuy"}
]);
let store = createStore(App,Immutable.fromJS({types : initTypeData}));

module.exports = store

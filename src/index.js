import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Test from "./companies/Test";
import {HashRouter, Route, Link} from "react-router-dom";
import companies from "./companies/companies";
import TestW from "./companies/TestW";
import  'antd/dist/antd.min.css'
import {DatePicker} from 'antd'
import {createStore} from "redux"
import {connect, Provider} from 'react-redux'


const CreateRedoucer =
function(state,action){
        return state
}
var store = createStore(CreateRedoucer);
store.dispatch(
    {
        type:'name',
        payload:'jing'
    }
)
store.dispatch(
    {
        type:'name',
        payload:'jing'
    }
)
store.dispatch(
    {
        type:'name',
        payload:'jing'
    }
)
var arr = [1, 2, 3, 4, 5, 6, 7]

var X = arr.map((num) => <li key={num}>{num}</li>)

store.subscribe(()=>{
    ReactDOM.render(
        (
            <HashRouter basename='/Test1'>
                <Provider store={store}>
                    <Test/>
                <div>

                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                    <ul>
                        {X}
                    </ul>

                    <div style={{display: "flex", justifyContent: "center"}}><Test/></div>

                    <Link to="/home">home</Link>&nbsp;&nbsp;
                    <Link to="/com">com</Link>  &nbsp;&nbsp;
                    <Link to="/TestW">testw</Link>

                    <hr/>
                    <Route path="/home" component={Test} exact/>
                    <hr/>
                    <Route path="/com" component={companies} exact/>
                    <hr/>
                    <Route path="/TestW" component={DatePicker} exact/>
                </div>
                </Provider>
            </HashRouter>
        ),
        document.getElementById('root')
    );
})


ReactDOM.render(
    (
        <HashRouter basename='/Test1'>
            <Provider store={store}>
                <div>
                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                    <ul>
                        {X}
                    </ul>

                    <div style={{display: "flex", justifyContent: "center"}}><Test/></div>

                    <Link to="/home">home</Link>&nbsp;&nbsp;
                    <Link to="/com">com</Link>  &nbsp;&nbsp;
                    <Link to="/TestW">testw</Link>

                    <hr/>
                    <Route path="/home" component={Test} exact/>
                    <hr/>
                    <Route path="/com" component={companies} exact/>
                    <hr/>
                    <Route path="/TestW" component={DatePicker} exact/>
                </div>
            </Provider>
        </HashRouter>
    ),
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

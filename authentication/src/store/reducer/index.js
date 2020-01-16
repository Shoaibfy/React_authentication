import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore,compose}from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';


const composeEnhances=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const store =createStore(reducer,composeEnhances(applyMiddleware(thunk)));

constapp=(

    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(
    app,
    document.getElementById('root')
);
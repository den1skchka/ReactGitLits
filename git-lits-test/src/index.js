import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./redux/combineReducers";
import {Provider} from "react-redux";


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
    ),
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

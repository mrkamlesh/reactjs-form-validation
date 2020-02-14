import React from 'react';
import ReactDOM from 'react-dom';

// Required for Redux store setup
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import createLogger from 'redux-logger';
import logger from 'redux-logger'
import allReducers from './reducers';

import './index.css';
import App from './App';


const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import destinationReducer from './reducers/destinationReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
// Use applyMiddleware to enable thunk
let store = createStore(destinationReducer, composeEnhancers(applyMiddleware(thunk)));

// Wrap entire app in provider to give all components access to the store
ReactDOM.render(
  <Provider store = { store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
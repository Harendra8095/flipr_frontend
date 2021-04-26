import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Main from './containers/Main';
import store from './configs/store'


ReactDOM.render(
  <Provider store={ store }>
    <Main/>
  </Provider>,
  document.getElementById('root')
);

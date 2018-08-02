import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './assets/sass/base.scss';
import RouterMap from './router/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <RouterMap/>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

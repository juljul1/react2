import ReactDOM from 'react-dom';
import './index.css';
//import React from 'react';
import React, { Component } from 'react';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

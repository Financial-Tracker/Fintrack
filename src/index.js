import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AuthProvider} from 'fireview'
import * as firebase from 'firebase'


const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

ReactDOM.render(<AuthProvider auth={firebase.auth()}><AlertProvider template={AlertTemplate} {...options}><App /></AlertProvider></AuthProvider>, document.getElementById('root'));
registerServiceWorker();



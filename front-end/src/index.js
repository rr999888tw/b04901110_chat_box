import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Launcher } from './react-chat-window/src'
import messageHistory from './react-chat-window/demo/src/messageHistory';


registerServiceWorker();
ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';
import MainApp from './components/MainApp';

import './styles/styles.css';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
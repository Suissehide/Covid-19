import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

import App from './views/App';
import * as serviceWorker from './serviceWorker';

import { observe } from './services/Game'

const root = document.getElementById('root');

observe(widgetPosition =>
    ReactDOM.render(
        <React.StrictMode>
            <App widgetPosition={widgetPosition} />
        </React.StrictMode>,
        root
    ),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

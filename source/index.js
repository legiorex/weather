// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
// Instruments
import './theme/init';
import { history } from './init/middleware/core';
import { store } from './init/store';

// App
import App from './navigation/App';

render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById("app")
);

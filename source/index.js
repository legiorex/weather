// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Instruments
import { store } from './init/store';

// Style
import 'semantic-ui-css/semantic.min.css';
import './theme/init.css';

// App
import App from './App';

render(
    <Provider store = { store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);

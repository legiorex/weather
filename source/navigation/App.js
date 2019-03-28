// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Pages
import { Login } from '../pages';

@hot(module)
export default class App extends Component {
    render () {
        return (
            <>
                <Login />
            </>
        );
    }
}

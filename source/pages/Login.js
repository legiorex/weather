// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner, Nav, LoginForm, Notification } from '../components';

export default class Login extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <LoginForm />
                <Notification />
            </Catcher>
        );
    }
}

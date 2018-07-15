// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner, Nav, SignupForm, Notification } from '../components';

export default class Signup extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <SignupForm />
                <Notification />
            </Catcher>
        );
    }
}

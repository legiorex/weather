// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner, Nav, ProfileForm, Notification } from '../components';

export default class Profile extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <ProfileForm />
                <Notification />
            </Catcher>
        );
    }
}

// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner, Nav, Posts, Notification } from '../components';

export default class Feed extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <Posts />
                <Notification />
            </Catcher>
        );
    }
}

// Core
import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import cx from 'classnames';
import { Map } from 'immutable';

// Instruments
import Styles from './styles.m.css';

export default class Notification extends Component {
    static defaultProps = {
        // State
        notification: Map(),

        // Actions:
        hideNotification: () => {},
    };

    state = {
        notificationIn: true,
    };

    componentWillUnmount () {
        const { hideNotification, notification } = this.props;

        hideNotification(notification.get('id'));
    }

    _hideNotification = () => {
        this.setState({
            notificationIn: false,
        });
    };

    _handleNotificationAppear = (postman) => {
        gsap.fromTo(postman, 0.5, { opacity: 0 }, { opacity: 1 });
    };

    _handleNotificationDisappear = (postman) => {
        const { hideNotification, notification } = this.props;

        gsap.fromTo(
            postman,
            0.5,
            { opacity: 1 },
            {
                opacity:    0,
                onComplete: () => {
                    hideNotification(notification.get('id'));
                },
            },
        );
    };

    _getComputedMessage = () => {
        const { notification } = this.props;

        const type = notification.get('type');
        const message = notification.get('message');
        const source = notification.get('source');

        if (type === 'error') {
            return (
                <span>
                    <span>Error in {source}:</span>
                    <span>{message}</span>
                </span>
            );
        }

        return <span>✓ {message}</span>;
    };

    _getNotificationStyles = () => {
        const { notification } = this.props;
        const type = notification.get('type');

        return cx(Styles.notification, {
            [Styles.info]: type === 'info',
        });
    };

    render () {
        const { notificationIn } = this.state;

        const computedMessage = this._getComputedMessage();
        const notificationStyles = this._getNotificationStyles();

        const isPresent = this.props.notification.get('id');

        return isPresent ? (
            <Transition
                appear
                in = { notificationIn }
                timeout = { 5000 }
                onClick = { this._hideNotification }
                onEnter = { this._handleNotificationAppear }
                onEntered = { this._handleNotificationDisappear }
                onExit = { this._handleNotificationDisappear }>
                <div className = { notificationStyles }>{computedMessage}</div>
            </Transition>
        ) : null;
    }
}

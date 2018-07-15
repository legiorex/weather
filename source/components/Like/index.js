// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class Like extends Component {
    state = {
        showLikers: false,
    };

    _likePost = () => {
        const {
            actions: { likePostAsync, unlikePostAsync },
            id,
        } = this.props;

        this._getLikedByMe() ? unlikePostAsync(id) : likePostAsync(id);
    };

    _showLikers = () => {
        this.setState(() => ({
            showLikers: true,
        }));
    };

    _hideLikers = () => {
        this.setState(() => ({
            showLikers: false,
        }));
    };

    _getLikedByMe = () => {
        const { profile, likes } = this.props;

        return likes.some((like) => like.get('id') === profile.get('id'));
    };

    _getLikersList = () => {
        const { likes } = this.props;
        const { showLikers } = this.state;

        return likes.size && showLikers ? (
            <ul>
                {likes.map((like) => (
                    <li key = { like.get('id') }>{`${like.get(
                        'firstName',
                    )} ${like.get('lastName')}`}</li>
                ))}
            </ul>
        ) : null;
    };

    _getTotalLikes = () => {
        const { likes, profile } = this.props;

        const likedByMe = this._getLikedByMe();

        return likes.size === 1 && likedByMe
            ? `${profile.get('firstName')} ${profile.get('lastName')}`
            : likes.size === 2 && likedByMe
                ? `You and ${likes.size - 1} other`
                : likedByMe
                    ? `You and ${likes.size - 1} others`
                    : likes.size;
    };

    render () {
        const likedByMe = this._getLikedByMe();

        const likeStyles = likedByMe
            ? `${Styles.icon} ${Styles.liked}`
            : `${Styles.icon}`;

        const likersList = this._getLikersList();
        const totalLikes = this._getTotalLikes();

        return (
            <section className = { Styles.like }>
                <span className = { likeStyles } onClick = { this._likePost }>
                    Like
                </span>
                <div>
                    {likersList}
                    <span
                        onMouseEnter = { this._showLikers }
                        onMouseLeave = { this._hideLikers }>
                        {totalLikes}
                    </span>
                </div>
            </section>
        );
    }
}

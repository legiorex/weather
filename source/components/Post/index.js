// Core
import React, { Component } from 'react';
import moment from 'moment';

// Instruments
import Styles from './styles.m.css';

// Components
import { Like } from '../../components';

export default class Post extends Component {
    _getCross = () => {
        const { profile, author } = this.props;

        return profile.get('id') === author.get('id') ? (
            <span className = { Styles.cross } onClick = { this._removePost } />
        ) : null;
    };

    _removePost = () => {
        const { actions, id } = this.props;

        actions.removePostAsync(id);
    };

    render () {
        const {
            actions,
            comment,
            created,
            id,
            likes,
            profile,
            author,
        } = this.props;

        const cross = this._getCross();

        return (
            <section className = { Styles.post }>
                {cross}
                <img src = { author.get('avatar') } />
                <a>{`${author.get('firstName')} ${author.get('lastName')}`}</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss a')}</time>
                <p>{comment}</p>
                <Like
                    actions = { actions }
                    id = { id }
                    likes = { likes }
                    profile = { profile }
                />
            </section>
        );
    }
}

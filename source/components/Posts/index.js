// Core
import React, { Component } from 'react';
import { List } from 'immutable';
import FlipMove from 'react-flip-move';

// Instruments
import Styles from './styles.m.css';
import { mockedProfile } from '../../instruments/mockedData';

// Components
import { Composer, Catcher, Post } from '../../components';

export default class Posts extends Component {
    static defaultProps = {
        // State
        posts:   List(),
        profile: mockedProfile,

        // Actions
        actions: {
            // Users
            fetchUsersAsync: () => {},

            // Posts
            fetchPostsAsync: () => {},
            removePostAsync: () => {},
            createPostAsync: () => {},
            likePostAsync:   () => {},
            unlikePostAsync: () => {},
        },
    };

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
    }

    render () {
        const { actions, posts, profile } = this.props;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        author = { post.get('author') }
                        comment = { post.get('comment') }
                        created = { post.get('created') }
                        id = { post.get('id') }
                        likes = { post.get('likes') }
                        profile = { profile }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.posts }>
                <Composer actions = { actions } profile = { profile } />
                <FlipMove>{postsJSX}</FlipMove>
            </section>
        );
    }
}

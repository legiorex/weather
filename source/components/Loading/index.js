import React, { Component } from 'react';

import Styles from './styles.m.css';

export default class Loading extends Component {
    render () {
        return (
            <section className = { Styles.loading }>
                <div className = { Styles['container--center'] }>
                    <div className = { Styles['dancing-pug'] }>
                        <ul>
                            <li className = { `${Styles.ear} ${Styles.elq}` } />
                            <li className = { Styles.ear } />
                            <li className = { Styles.eye } />
                            <li className = { Styles.eye } />
                            <li />
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

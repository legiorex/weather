// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import photo1 from '../../../theme/assets/photos/1.jpeg';

// Instruments
import Styles from './styles.m.css';

@hot(module)
export default class Gallery extends Component {
    render () {
        const url = photo1;

        return (
            <section className = { Styles.gallery }>
                <img src = { url } />
                <div>
                    <button>←</button>
                    <button className = { Styles.buttonActive } value = '0'>
                        1
                    </button>
                    <button value = '1'>2</button>
                    <button value = '2'>3</button>
                    <button value = '3'>4</button>
                    <button>→</button>
                </div>
            </section>
        );
    }
}

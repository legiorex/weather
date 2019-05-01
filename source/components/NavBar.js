// Core
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// Style
import Styles from './styles.m.css';

const mapStateToProps = (state) => {
    return {
        cities: state.weather.cities,
    };
};

@connect(mapStateToProps)
export default class NavBar extends Component {
    _renderLink = () => {
        const { cities, currentCity } = this.props;

        return cities.map((item) => {
            return (
                <NavLink
                    className = { Styles.itemWrapper }
                    key = { item.id }
                    to = { `/${item.link}` }>
                    <Menu.Item
                        active = { currentCity === `${item.link}` }
                        className = { Styles.menuItem }
                        name = { item.name }
                    />
                </NavLink>
            );
        });
    };

    render () {
        return (
            <div>
                <Menu inverted className = { Styles.mainMenu } color = { 'teal' }>
                    {this._renderLink()}
                </Menu>
            </div>
        );
    }
}

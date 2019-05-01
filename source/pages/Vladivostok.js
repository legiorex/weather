// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import NavBar from '../components/NavBar';
import WeatherInfo from '../components/WeatherInfo';

// Instruments
import { filterWeather } from '../instruments';

const mapStateToProps = (state) => {
    return {
        weatherData: state.weather.weatherData,
    };
};

@connect(mapStateToProps)
export default class Vladivostok extends Component {
    render () {
        const { cityId, weatherData } = this.props;

        return (
            <>
                <NavBar currentCity = 'vladivostok' />
                <WeatherInfo cityWeather = { filterWeather(cityId, weatherData) } />
            </>
        );
    }
}

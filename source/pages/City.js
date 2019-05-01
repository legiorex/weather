// Core
import React from 'react';
import { Grid } from 'semantic-ui-react';

// Components
import NavBar from '../components/NavBar';
import WeatherInfo from '../components/WeatherInfo';

// Instruments
import { filterWeather } from '../instruments/helpers';

// Style
import Styles from './styles.m.css';

const City = ({ cityId, weatherData, currentCity, cityName }) => {
    return (
        <>
            <Grid
                centered
                stretched
                className = { Styles.wrapper }
                verticalAlign = { 'middle' }>
                <Grid.Column className = { Styles.mainContainer }>
                    <NavBar currentCity = { currentCity } />
                    {weatherData.length !== 0 ? (
                        <WeatherInfo
                            cityName = { cityName }
                            cityWeather = { filterWeather(cityId, weatherData) }
                        />
                    ) : null}
                </Grid.Column>
            </Grid>
        </>
    );
};

export default City;

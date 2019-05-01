// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hot } from 'react-hot-loader';

// Pages
import City from './pages/City';

// Actions
import { weatherActions } from './bus/weather/actions';

const mapStateToProps = (state) => {
    return {
        cities:      state.weather.cities,
        weatherData: state.weather.weatherData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...weatherActions }, dispatch),
    };
};

@hot(module)
@withRouter
@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class App extends Component {
    componentDidMount () {
        const { actions, cities } = this.props;

        const citiesId = cities
            .map((item) => {
                return item.id;
            })
            .join(',');

        actions.getWeather(citiesId);
    }

    _renderRoute = () => {
        const { cities } = this.props;

        return cities.map((item) => {
            return (
                <Route
                    key = { item.id }
                    path = { `/${item.link}` }
                    render = { (props) => (
                        <City
                            { ...props }
                            cityId = { item.id }
                            cityName = { item.name }
                            currentCity = { item.link }
                            weatherData = { this.props.weatherData }
                        />
                    ) }
                />
            );
        });
    };

    render () {
        return (
            <>
                <Switch>
                    {this._renderRoute()}
                    <Redirect to = '/vladivostok' />
                </Switch>
            </>
        );
    }
}

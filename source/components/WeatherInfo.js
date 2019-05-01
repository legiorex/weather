// Core
import React from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';
import moment from 'moment-timezone';
import tzlookup from 'tz-lookup';

// Style
import '../theme/owfont-regular.css';
import Styles from './styles.m.css';

const WeatherInfo = ({ cityName, cityWeather }) => {
    const idWeather = cityWeather.weather[0].id;
    const description = cityWeather.weather[0].description;
    const windSpeed = cityWeather.wind.speed;
    const { temp, humidity, pressure } = cityWeather.main;
    const timeZone = tzlookup(cityWeather.coord.lat, cityWeather.coord.lon);
    const globalTime = moment
        .unix(cityWeather.dt)
        .utc()
        .tz(timeZone);
    const date = globalTime.locale('ru').format('dddd Do MMMM YYYY');
    const time = globalTime.locale('ru').format('HH:mm');

    return (
        <Segment>
            <Item.Group>
                <Item>
                    <Item.Image size = 'tiny'>
                        <i className = { `owf owf-${idWeather} owf-5x` } />
                    </Item.Image>

                    <Item.Content className = { Styles.contentColumn }>
                        <Item.Header>{cityName}</Item.Header>
                        <Item.Meta>{description}</Item.Meta>
                        <Item.Description className = { Styles.contentColumn }>
                            <Item.Description className = { Styles.description }>
                                <Item.Header as = 'h4'>
                                    Температура воздуха
                                </Item.Header>
                                {`${temp} °C`}
                            </Item.Description>

                            <Item.Description className = { Styles.description }>
                                <Item.Header as = 'h4'>Влажность</Item.Header>
                                {`${humidity} %`}
                            </Item.Description>

                            <Item.Description className = { Styles.description }>
                                <Item.Header as = 'h4'>Давление</Item.Header>
                                {`${pressure} гПа`}
                            </Item.Description>
                            <Item.Description className = { Styles.description }>
                                <Item.Header as = 'h4'>
                                    Скорость ветра
                                </Item.Header>
                                {`${windSpeed} м/с`}
                            </Item.Description>
                        </Item.Description>
                    </Item.Content>
                    <Item.Content className = { Styles.contentColumn }>
                        <Item.Content className = { Styles.timeBox }>
                            <Header>Дата</Header>
                            <Item.Meta>{date}</Item.Meta>
                        </Item.Content>

                        <Item.Content className = { Styles.timeBox }>
                            <Header>Местное время</Header>
                            <Item.Meta>{time}</Item.Meta>
                        </Item.Content>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    );
};

export default WeatherInfo;

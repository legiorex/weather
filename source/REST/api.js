const url = 'http://api.openweathermap.org/data/2.5/group?id=';
const key = '3afdf68646c70c4a2617d387992d73d8';

export const api = {
    fetchWeather (idCities) {
        return fetch(`${url}${idCities}&lang=ru&units=metric&appid=${key}`, {
            method: 'POST',
        });
    },
};

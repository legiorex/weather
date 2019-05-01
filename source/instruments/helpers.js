export const filterWeather = (cityId, weatherData) => {
    return weatherData.filter((item) => {
        return item.id === cityId;
    })[0];
};

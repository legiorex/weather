// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const errorMessage = 'TEST_ERROR_MESSAGE.';

const idCities = '2013348,491422,468902';
const id = 2013348;
const weatherMock = [
    {
        clouds: { all: 40 },
        coord:  { lon: 131.87, lat: 43.11 },
        dt:     1556695234,
        id:     2013348,
        main:   { temp: 10, pressure: 1000, humidity: 76, temp_min: 10, temp_max: 10 },
        name:   'Vladivostok',
        sys:    {
            type:    1,
            id:      8885,
            message: 0.005,
            country: 'RU',
            sunrise: 1556654827,
            sunset:  1556705525,
            type:    1 },
        visibility: 10000,
        weather:    [
            {
                id:          802,
                main:        'Clouds',
                description: 'слегка облачно',
                icon:        '03d',
            }
        ],
        wind: { speed: 1 },
    }
];

const responseDataSuccess = {
    list: weatherMock,
    cnt:  1,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

global.__ = {
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail400,
    weatherMock,
    idCities,
    id,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();

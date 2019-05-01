// Core
import { filterWeather } from './helpers';

describe('instruments:', () => {
    test('filterWeather function should be a function', () => {
        expect(filterWeather).toBeInstanceOf(Function);
    });

    test('filterWeather function should be return new array', () => {
        expect(filterWeather(__.id, __.weatherMock)).toEqual(
            __.weatherMock.filter((item) => {
                return item.id === __.id;
            })[0]
        );
    });
});

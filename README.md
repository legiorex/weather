# Тестовое задание. Прогноз погоды.
### Задание.
> Необходимо разработать мини-SPA по показу текущей погоды в городах.<br>
> На экране должен быть список из 3-х городов на ваш выбор.<br>
> При клике на Город должен показываться прогноз погоды для выбранного города.<br>
> Открытое API для получения прогноза: https://openweathermap.org/current<br>
> Для элементов дизайна предпочтительно использовать фреймворк semantic-ui-react<br>
> В реализации должны быть использованы модули react-router, fetch. Архитектура Redux<br>
> Результат необходимо опубликовать на github
### Использованные библиотеки и инструменты
<p align="center">
<a href="https://reactjs.org/"><img src="icons/react.svg" alt="React" title="React"width="100"></a> 
<a href="https://redux.js.org/"><img src="icons/redux.svg" alt="Redux" title="Redux" width="100"></a> 
<a href="https://redux-saga.js.org/"><img src="icons/redux-saga.svg" alt="Redux-saga" title="Redux-Saga" width="150"></a>
<a href="https://nodejs.org/"><img src="icons/nodejs-1.svg" alt="NodeJs" title="NodeJs" width="150"></a>
<a href="https://webpack.js.org/"><img src="icons/webpack-icon.svg" alt="Webpack" title="Webpack" width="100"></a>
</p><br>
<p align="center">
<a href="https://babeljs.io/"><img src="icons/babel-10.svg" alt="Babel" title="Babel" width="150"></a>
<a href="https://postcss.org/"><img src="icons/postcss.svg" alt="Postcss" title="Postcss" width="100"></a>
<a href="https://jestjs.io/"><img src="icons/jest-0.svg" alt="Jest" title="Jest" width="90"></a>
<a href="https://react.semantic-ui.com/"><img src="icons/semantic-ui.svg" alt="Semantic-ui" title="Semantic-ui" width="100"></a>
<a href="https://momentjs.com/"><img src="icons/momentjs.svg" alt="momentjs" title="Momentjs" width="100"></a>
</p>

### Запуск приложения
```sh
npm install
npm start
```
Для запуска тестов необходимо выполнить следующую команду
```sh
npm test
```
### Описание
- Использовал доменную архитектуру - очень удобна и масштабируемая в будущем. Для каждого функционала - создается своя папка (домен) с actions, reducer и saga. Это приложение простое - поэтому домен всего один.
- Для отображения погоды написан переиспользуемый компонент City.  Из-за этого рутовый компонент App получился излишне загроможден кодом. 
- Компоненты City и WeatherInfo - это простые функциональные компоненты, не имеющие своего состояния.
Компонент NavBar - классовый компонент, можно было так же реализовать с помощью функционального компонента. Но я показал - что можно и так и так.
- Использовал современный синтаксис декораторов.
- Параметры api вынесены в отдельный файл.
- Вызов api происходит через action в redux-saga. Если статус ответа сервера не 200, то обрабатываю ошибку и вывожу ее в консоль.
- Написал один запрос на сервер для всех городов с сохранением в store, а не на каждый город свой запрос. Мне кажется - так лучше.
- Написал функцию-хелпер для фильтрации данных о погоде. В случае большого приложения таких функций может быть больше.
- Для получения временной зоны и местного времени использовал библиотеки [tz-lookup](https://github.com/darkskyapp/tz-lookup "tz-lookup") и [moment-timezone](https://momentjs.com/timezone/ "moment-timezone") соответственно.
- Подключил иконочные шрифты для отображения иконки погоды.
- Написал тесты для redux составляющей и функции хелпера.
- Для написания стилей использовал css-модули. Для каждого компонента свой файл стилей, можно легко и быстро находить нужный элемент.

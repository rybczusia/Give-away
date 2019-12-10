import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Webfont from 'webfontloader'
import './scss/main.scss'

Webfont.load({
    google: {
        families: ['Open Sans: 300,400', 'Merriweather: 300, 400', 'sans-serif']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

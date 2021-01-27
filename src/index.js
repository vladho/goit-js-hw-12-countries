import './styles.css';
import itemTpl from './handelbars/item.hbs';
import {  success } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import { alert, defaultModules } from '../node_modules/'
//   import * as PNotifyMobile from 'node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import 'material-design-icons/iconfont/material-icons.css';

// fetch("https://restcountries.eu/rest/v2/name").then(responce => responce.json).then(console.log)
// fetch('https://restcountries.eu/rest/v2/all?fields=name')
//   .then(responce => responce.json())
//   .then(console.log);

const countryRef = document.querySelector('.input-country');
const resultRef = document.querySelector('.result');

countryRef.addEventListener('change', () => {
    success({
  title: 'Sticky Success',
        text: 'Sticky success... I\'m not even gonna make a joke.',
  delay: 3000,
        hide: true,
  closerHover: false,
  stickerHover: false
});
  const acquiredInfo = fetch(
    `https://restcountries.eu/rest/v2/name/${countryRef.value}`,
  ).then(responce =>
    responce.json().then(item => {
      console.log(item);
      const markup = itemTpl(item);
      console.log(markup);
        resultRef.insertAdjacentHTML('beforeend', markup);
        
    }),
  );
});

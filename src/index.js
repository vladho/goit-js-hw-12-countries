import './styles.css';
import country from './handelbars/country.hbs';
import countries from './handelbars/countries.hbs';

import { success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import 'material-design-icons/iconfont/material-icons.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';

const countryRef = document.querySelector('.input-country');
const resultRef = document.querySelector('.result');

const errorReslt = {
  text: 'Too many matches found. Please enter a more specific query!',
  delay: 3000,
  hide: true,
  sticker: false,
  closerHover: false,
  maxTextHeight: null,
};

countryRef.addEventListener(
  'input',
  debounce(() => {
    if (countryRef.value.length > 0) {
      fetchCountries(countryRef.value).then(item => {
        resultRef.innerHTML = '';

        if (item.length > 10) {
          error(errorReslt);
        }

        if (item.length < 11 && item.length > 1) {
          const markup = countries(item);
          resultRef.insertAdjacentHTML('beforeend', markup);
        }

        if (item.length < 2) {
          const markup = country(item);
          resultRef.insertAdjacentHTML('beforeend', markup);
        }
      });
    }
  }, 500),
);

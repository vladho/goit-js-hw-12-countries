import './styles.css';
import itemTpl from './handelbars/item.hbs';

// fetch("https://restcountries.eu/rest/v2/name").then(responce => responce.json).then(console.log)
// fetch('https://restcountries.eu/rest/v2/all?fields=name')
//   .then(responce => responce.json())
//   .then(console.log);

const countryRef = document.querySelector('.input-country');
const resultRef = document.querySelector('.result');

countryRef.addEventListener('change', () => {
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

import './styles.css';


fetch("https://restcountries.eu/rest/v2/name").then(responce => responce.json).then(console.log)
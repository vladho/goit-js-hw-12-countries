const fetchCountries = searchQuery => {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${searchQuery}`,
  ).then(responce => responce.json());
};

export default fetchCountries;

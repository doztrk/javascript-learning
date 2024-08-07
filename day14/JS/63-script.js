import { countries } from "../data/countries.js";

console.log(countries[120].name.common);

const setOptions = () => {
  let options = "<option>-- Select a Country -- </option>";
  for (let country of countries) {
    console.log(country.name.common);
    options += `<option>${country.name.common}</option>`;
  }
  selectCountries.innerHTML = options;
};

setOptions();

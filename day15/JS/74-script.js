import { countries } from "../../day14/data/countries.js";

console.log(countries[120].name.common);

const setOptions = () => {
  let selectElement = document.getElementById('selectCountries');
  let options = `<option value="">-- Select a Country --</option>`; // Added a default option
  for (let country of countries) {
    options += `<option value="${country.ccn3}">${country.name.common}</option>`; // Changed to use `value`
  }
  selectElement.innerHTML = options;
};

setOptions();

// ------------ Get Country Function ------------

const getCountry = (countryCode) => {
  let filteredCountry = countries.filter((country) => country.ccn3 == countryCode);

  if (filteredCountry.length > 0) {
    let country = filteredCountry[0];
    console.log(country.capital.join(" - "));
    console.log(Object.keys(country.currencies).join(" - "));
    console.log(Object.values(country.languages).join(" - "));
    console.log(country.latlng.join(", ")); // Fixed format

    return country;
  } else {
    console.error("Country not found.");
    return null;
  }
};

// ------------ Fill Table Function ------------

const fillTable = (country) => {
  if (!country) {
    console.error("No country data to display.");
    return;
  }

  let capitalCity = country.capital.join(" - ");
  let currency = Object.keys(country.currencies).join(" - ");
  let language = Object.values(country.languages).join(" - ");
  let area = country.area;
  let mapLink = `<a href="http://maps.google.com/?q=${country.latlng.join(',')}" target="_blank">Google Map</a>`; // Fixed URL

  document.querySelector("#tableCountries tr:nth-child(1) td").innerHTML = capitalCity;
  document.querySelector("#tableCountries tr:nth-child(2) td").innerHTML = currency;
  document.querySelector("#tableCountries tr:nth-child(3) td").innerHTML = language;
  document.querySelector("#tableCountries tr:nth-child(4) td").innerHTML = area;
  document.querySelector("#tableCountries tr:nth-child(5) td").innerHTML = mapLink;
};

// Make the table dynamic

document.getElementById('selectCountries').onchange = (event) => {
  let countryCode = event.target.value;
  let country = getCountry(countryCode);
  if (country) fillTable(country);
};


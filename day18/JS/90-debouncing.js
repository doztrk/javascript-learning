import { countries } from "../../day14/data/countries.js";

const filterCountries = (searchText) => {
  if (searchText === "") return [];
  searchText = searchText.toUpperCase();
  let filteredData = countries.filter((country) =>
    country.name.common.toUpperCase().includes(searchText)
  );
  return filteredData;
};

//console.log(filterCountries("ar"));

const setList = (countryList) => {
  let list = document.getElementById("list");
  list.innerHTML = ""; //clear the list before adding new countries

  countryList.forEach((country) => {
    let li = document.createElement("li");
    li.innerHTML = country.name.common;
    list.appendChild(li);
  });
};

//setList(filterCountries("Tur"));
let timer;
document.getElementById("searchBar").addEventListener("input", (event) => {
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    let countryList = filterCountries(event.target.value);
    setList(countryList);
    console.log(setList(countryList));
  }, 700);
});

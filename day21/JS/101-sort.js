const sortNumbersASC = (array) => {
  return array.sort((a, b) => a - b);
};
const sortNumbersDESC = (array) => {
  return array.sort((a, b) => b - a);
};
const sortTextASC = (array) => {
  return array.sort((a, b) => a.localeCompare(b));
};
const sortTextDESC = (array) => {
  return array.sort((a, b) => b.localeCompare(a));
};

export { sortNumbersASC, sortNumbersDESC, sortTextASC, sortTextDESC };

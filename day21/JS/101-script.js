import {
  sortNumbersASC,
  sortNumbersDESC,
  sortTextASC,
  sortTextDESC,
} from "./101-sort.js";

const names = ["Ayşe", "Ali", "Can", "Canan", "John", "Conan", "Çiçek"];
const numbers = [65, 75, 32, 158, 3];

btnSort1.addEventListener("click", () => {
  const originalNumbers = [...numbers];
  originalArray.innerHTML = `Original array is: ${originalNumbers}`;
  result.innerHTML = `Sorted array is : ${sortNumbersASC([
    ...originalNumbers,
  ])}`;
});

btnSort2.addEventListener("click", () => {
  const originalNumbers = [...numbers];
  originalArray.innerHTML = `Original array is: ${originalNumbers}`;
  result.innerHTML = `Sorted array is : ${sortNumbersDESC([
    ...originalNumbers,
  ])}`;
});

btnSort3.addEventListener("click", () => {
  const originalNames = [...names];
  originalArray.innerHTML = `Original array is: ${originalNames}`;
  result.innerHTML = `Sorted array is : ${sortTextASC([...originalNames])}`;
});

btnSort4.addEventListener("click", () => {
  const originalNames = [...names];
  originalArray.innerHTML = `Original array is: ${originalNames}`;
  result.innerHTML = `Sorted array is : ${sortTextDESC([...originalNames])}`;
});

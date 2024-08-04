/* Write a function using arrow syntax that takes product price, VAT rate, 
and discount rate as parameters and calculates the final price.
 If the product price is over 1500, an additional 10% discount will be applied.
 If no discount is applied, VAT will not be included in the calculation. */

const calculate = (price, tax, discount) => {
  if (price > 1500) discount += 10;
  if (discount <= 0) tax = 0;

  let totalTax = (price * tax) / 100;
  let totalDiscount = (price * discount) / 100;
  let lastPrice = price + totalTax - totalDiscount;

  return lastPrice;
};

let showLastPrice = () => {
  let fiyat = Number(price.value);
  let vergi = Number(tax.value);
  let indirim = Number(discount.value);

  result.innerHTML = `Son fiyat:  ${calculate(fiyat, vergi, indirim)}`;
};

"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1, x2;
  d = b ** 2 - 4 * a * c
  if (d < 0) {
    return [];
  } if (d==0) {
    x1 = - b / (2 * a);
    return [x1];
  } if (d>0) {
    x1 = (- b + Math.sqrt(d) ) / (2 * a);
    x2 = (- b - Math.sqrt(d) ) / (2 * a);
    return [x1, x2]
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = percent / 100;
  let P = per / 12;
  let S = amount - contribution;
  let n = countMonths;
  let monthlyPayment = S * (P + (P/(((1 + P) ** n) - 1)));
  monthlyPayment = monthlyPayment.toFixed(2);
  allSum = Number(monthlyPayment) * countMonths;
   return allSum;
  
}
"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c
	if (d === 0) {
		arr.push (-b / (2 * a));
	} else if (d > 0) {
		arr.push ((-b + Math.sqrt(d)) / (2 * a));
    arr.push ((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
let percentInMonth = percent / 100 / 12;
let sumPayment = amount - contribution;
let monthlyPayment = sumPayment * (percentInMonth + (percentInMonth / (((1 + percentInMonth) ** countMonths) - 1)));
let allSum = (monthlyPayment * countMonths).toFixed(2);
allSum = Number(allSum);
return allSum;
}
"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d === 0) {
		let root = -b / (2 * a)
		arr.push(root);
	} else if (d >= 0) {
		let rootmin = (-b - Math.sqrt(d)) / (2 * a);
		let rootplus = (-b + Math.sqrt(d)) / (2 * a);
		arr.push(rootplus);
		arr.push(rootmin);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let ratepermonth = (percent / 100) / 12;
	let creditbody = amount - contribution;
	let paypermonth = creditbody * (ratepermonth + (ratepermonth / (((1 + ratepermonth) ** countMonths) - 1)));
	let sum = paypermonth * countMonths;
	return Math.round(sum * 100) / 100
}
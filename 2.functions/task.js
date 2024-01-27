function getArrayParams(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let initialValue = 0;
	const sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);
	let avg = (sum / arr.length).toFixed(2);
	avg = Number(avg);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	let sum = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (i != -1) {
				sum += arr[i];
			}

		} else {
			return 0;
		};

	};

	return sum;

};


function differenceMaxMinWorker(...arr) {

	let min = Infinity;
	let max = -Infinity;

	for (i = 0; i < arr.length; i++) {

		if (arr !== undefined) {

			if (max < arr[i]) {
				max = arr[i];
			}

			if (min > arr[i]) {
				min = arr[i];
			}
		} else {
			return 0;
		};
	};

	let difference = max - min;

	if (difference === -Infinity) {
		return 0
	} else {
		return difference;
	}
};

function differenceEvenOddWorker(...arr) {

	sumEvenElement = 0;
	sumOddElement = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		} else {
			return 0;
		};
	};

	return sumEvenElement - sumOddElement;

};

function averageEvenElementsWorker(...arr) {

	sumEvenElement = 0;
	countEvenElement = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		} else {
			return 0;
		};
	};

	if (sumEvenElement !== countEvenElement) {

		return sumEvenElement / countEvenElement;

	} else {

		return 0;

	};

};

function makeWork(arrOfArr, func) {

	let maxWorkerResult;
	let array = [];
	let maxOfTheMax = [];

	for (let a = 0; a < arrOfArr.length; a++) {

		maxWorkerResult = arrOfArr[a];
		array.push(maxWorkerResult)
		maxOfTheMax.push(func(...maxWorkerResult));

	};

	const max = maxOfTheMax.reduce((a, b) => Math.max(a, b), -Infinity);
	return (max);

};
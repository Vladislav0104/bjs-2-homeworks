function getArrayParams(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0,
	);
	let avg = (sum / arr.length).toFixed(2);
	return {
		min: min,
		max: max,
		avg: Number(avg)
	};
}

function summElementsWorker(...arr) {

	if (arr.length === 0) return 0;
	for (let i = 0; i < arr.length; i++) {

		let sum = arr.reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0, )
		return sum;
	};

};


function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;

	for (let i = 0; i < arr.length; i++) {


		let max = Math.max(...arr);
		let min = Math.min(...arr);
		let difference = max - min;

		if (difference === -Infinity) {
			return 0
		} else {
			return difference;
		}
	}
};

function differenceEvenOddWorker(...arr) {

	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		};

	};
	return sumEvenElement - sumOddElement;
};

function averageEvenElementsWorker(...arr) {

	if (arr.length === 0) return 0;
	sumEvenElement = 0;
	countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		};
	};
	return sumEvenElement / countEvenElement;
};

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);

	for (let i = 0; i < arrOfArr.length; i++) {
		let maxResult = func(...arrOfArr[i]);

		if (maxResult > maxWorkerResult) {
			maxWorkerResult = maxResult;
		}
	}

	return maxWorkerResult;
}
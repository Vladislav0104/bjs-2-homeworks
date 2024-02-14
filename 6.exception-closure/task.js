function parseCount(arg) {
	let parseResult = Number.parseFloat(arg);
	if (isNaN(parseResult)) {
		const error = new Error("Невалидное значение");
		throw error;
	}
	return parseResult;
};

function validateCount(arg) {
	try {
		return parseCount(arg);
	} catch (error) {
		return error;
	}
};


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c
		if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.b + this.c) < a) {
			throw new Error('Треугольник с такими сторонами не существует')
		}
	};
	get perimeter() {
		let P = this.a + this.b + this.c;
		return P
	};
	get area() {
		let S = Math.sqrt((this.perimeter / 2) * ((this.perimeter / 2) - this.a) * ((this.perimeter / 2) - this.b) * ((this.perimeter / 2) - this.c));
		return Number(S.toFixed(3))
	}
};

function getTriangle(a, b, c) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle
	} catch (error) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}